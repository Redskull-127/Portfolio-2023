export default function Texting() {
    const paths = ['', '/about', '/skills', '/projects', '/contact', '/chat', 'blog'].map((route) => ({
        url: `https://www.meertarbani.in${route}`,
        lastModified: new Date().toISOString().split('T')[0],
    }))
    return [...paths]
}