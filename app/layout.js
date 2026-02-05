export const metadata = {
  title: 'Guarda-Roupa Virtual',
  description: 'Provador virtual para e-commerce de moda',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
