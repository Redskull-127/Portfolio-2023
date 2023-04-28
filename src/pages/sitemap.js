export default async function sitemap() {
    const routes = ['', '/skills','/latest','/projects','/contact','/support'].map(
        (route) => ({
            url: `https://meertarbani.in${route}`,
        })
    );
    return [...routes]
}