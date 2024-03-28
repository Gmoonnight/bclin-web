import "./globals.css";
import {inter} from '@/app/fonts';

export default function RootLayout({children} : Readonly<{children: React.ReactNode}>) {
	return (
		<html lang = "en">
			<body className = {`${inter.className} antialiased bg-slate-600`}>{children}</body>
		</html>
	);
}
