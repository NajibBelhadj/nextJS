export default function handler(req, res) {
    res.setPreviewData({ user: 'Najib' });
    res.redirect(req.query.redirect)
    //res.end('Preview mode enable')
}