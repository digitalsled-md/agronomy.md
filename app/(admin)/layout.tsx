export default function AdminPamel({ children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="RU">
            <body>
                <div>
                    {children}
                </div>
            </body>
        </html>
    )
}