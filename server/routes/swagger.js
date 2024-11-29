/**
 * @swagger
 * tags:
 *   name: Sports
 *   description: API pour gérer les installations sportives
 * 
 * components:
 *   schemas:
 *     Sport:
 *       type: object
 *       required:
 *         - geo_point_2d
 *         - name
 *       properties:
 *         geo_point_2d:
 *           type: object
 *           properties:
 *             lon:
 *               type: number
 *             lat:
 *               type: number
 *         name:
 *           type: string
 *         sport:
 *           type: string
 *         wheelchair:
 *           type: boolean
 * 
 * /sports/{filter}:
 *   get:
 *     summary: Récupère les installations d'un sport spécifique
 *     tags: [Sports]
 *     parameters:
 *       - in: path
 *         name: filter
 *         required: true
 *         schema:
 *           type: string
 *         description: Type de sport (Fitness, Basketball, Natation, Skateboard, Sprint)
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Results per page
 *     responses:
 *       200:
 *         description: Succès
 *       400:
 *         description: Sport invalide
 * 
 * /health:
 *   get:
 *     summary: Vérifie l'état du serveur
 *     tags: [System]
 *     responses:
 *       200:
 *         description: État du serveur
 */