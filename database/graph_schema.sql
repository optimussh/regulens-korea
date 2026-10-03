-- ====================================================================
-- ReguLens Korea - Regulatory Knowledge Graph & Ontology Schema
-- Schema for Knowledge Graph (GraphRAG) in Supabase PostgreSQL
-- ====================================================================

-- 1. Graph Nodes Table (온톨로지 엔티티 노드)
CREATE TABLE IF NOT EXISTS public.graph_nodes (
    id VARCHAR(100) PRIMARY KEY,
    label VARCHAR(255) NOT NULL,
    entity_type VARCHAR(50) NOT NULL,       -- 'COMPANY', 'FACILITY', 'MATERIAL', 'PROCESS', 'REG_EVENT', 'REG_CLAUSE', 'DOMESTIC_PRODUCT'
    risk_level VARCHAR(20) DEFAULT 'NORMAL', -- 'CRITICAL', 'MAJOR', 'NORMAL'
    country VARCHAR(100),
    properties JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 2. Graph Edges Table (온톨로지 관계 엣지)
CREATE TABLE IF NOT EXISTS public.graph_edges (
    id VARCHAR(100) PRIMARY KEY,
    source_node_id VARCHAR(100) NOT NULL REFERENCES public.graph_nodes(id) ON DELETE CASCADE,
    target_node_id VARCHAR(100) NOT NULL REFERENCES public.graph_nodes(id) ON DELETE CASCADE,
    relation_type VARCHAR(50) NOT NULL,     -- 'OPERATES', 'PRODUCES', 'USES_PROCESS', 'INSPECTED_BY', 'CITES_CLAUSE', 'CROSS_MAPPED_TO', 'SUPPLIES_TO', 'POTENTIAL_IMPACT'
    label_kr VARCHAR(100) NOT NULL,         -- 관계 한국어 표기 (예: '제조 및 공급', '실사 지적', '식약처 규정 매핑')
    properties JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Indexes for Fast Graph Traversal
CREATE INDEX IF NOT EXISTS idx_graph_nodes_type ON public.graph_nodes(entity_type);
CREATE INDEX IF NOT EXISTS idx_graph_nodes_risk ON public.graph_nodes(risk_level);
CREATE INDEX IF NOT EXISTS idx_graph_edges_src ON public.graph_edges(source_node_id);
CREATE INDEX IF NOT EXISTS idx_graph_edges_tgt ON public.graph_edges(target_node_id);
CREATE INDEX IF NOT EXISTS idx_graph_edges_rel ON public.graph_edges(relation_type);

-- RLS Policies
ALTER TABLE public.graph_nodes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.graph_edges ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to graph_nodes" ON public.graph_nodes FOR SELECT USING (true);
CREATE POLICY "Allow public read access to graph_edges" ON public.graph_edges FOR SELECT USING (true);
