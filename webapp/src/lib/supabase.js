import { createClient } from "@supabase/supabase-js";
import { INITIAL_REGULATORY_DOCS, INITIAL_WATCHLIST } from "./data";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(
  supabaseUrl && 
  supabaseAnonKey && 
  !supabaseUrl.includes("your-project")
);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Graceful wrapper for fetching regulatory documents
export async function getRegulatoryDocuments() {
  if (!isSupabaseConfigured) {
    return { data: INITIAL_REGULATORY_DOCS, error: null, source: "embedded" };
  }

  try {
    const { data, error } = await supabase
      .from("reg_documents")
      .select(`
        *,
        reg_insights (*)
      `)
      .order("issue_date", { ascending: false });

    if (error || !data || data.length === 0) {
      return { data: INITIAL_REGULATORY_DOCS, error, source: "fallback" };
    }

    // Normalize Supabase structure to match client expectations
    const normalized = data.map((doc) => {
      const insight = doc.reg_insights?.[0] || {};
      return {
        ...doc,
        title_kr: insight.title_kr || doc.doc_number,
        summary_kr: insight.summary_kr || "요약 정보가 없습니다.",
        severity_level: insight.severity_level || "MAJOR",
        process_types: insight.process_types || [],
        violation_codes_fda: insight.violation_codes_fda || [],
        violation_codes_kgmp: insight.violation_codes_kgmp || [],
        violation_codes_ema: insight.violation_codes_ema || [],
        root_cause_analysis: insight.root_cause_analysis || "",
        capa_checklist: insight.capa_checklist || [],
        key_citations: insight.key_citations || [],
      };
    });

    return { data: normalized, error: null, source: "supabase" };
  } catch (err) {
    console.warn("Supabase fetch failed, falling back to embedded dataset:", err);
    return { data: INITIAL_REGULATORY_DOCS, error: err, source: "fallback" };
  }
}

// Graceful wrapper for watchlists
export async function getWatchlists() {
  if (!isSupabaseConfigured) {
    return { data: INITIAL_WATCHLIST, error: null, source: "embedded" };
  }

  try {
    const { data, error } = await supabase
      .from("user_watchlists")
      .select("*")
      .order("created_at", { ascending: false });

    if (error || !data || data.length === 0) {
      return { data: INITIAL_WATCHLIST, error, source: "fallback" };
    }
    return { data, error: null, source: "supabase" };
  } catch (err) {
    return { data: INITIAL_WATCHLIST, error: err, source: "fallback" };
  }
}
