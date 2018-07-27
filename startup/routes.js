import articleRoutes from '../routes/articles';

const articles = app => app.use('/api/articles', articleRoutes);

export default articles;
