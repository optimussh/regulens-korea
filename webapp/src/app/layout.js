import "./globals.css";

export const metadata = {
  title: "ReguLens Korea | 제약·바이오 AI 규제 인텔리전스 & GMP 실사 플랫폼",
  description: "글로벌 규제기관(FDA, EMA, 식약처) 실사 및 경고장 데이터를 AI로 분석하여 1:1 KGMP 매핑, 공정별 CAPA 점검표 및 원문 인용 대조를 제공하는 B2B 규제 솔루션",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
