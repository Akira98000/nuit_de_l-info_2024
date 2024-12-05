const express = require('express');
const router = express.Router();
const admin = require('../firebase/firebase');
const db = admin.firestore();

/**
 * @swagger
 * /leaderboard:
 *   get:
 *     summary: Get the leaderboard
 *     responses:
 *       200:
 *         description: A list of leaderboard entries
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   score:
 *                     type: integer
 *       500:
 *         description: Error getting leaderboard
 */
router.get('/', async (req, res) => {
    try {
        const leaderboardRef = db.collection('leaderboard');
        const snapshot = await leaderboardRef.get();
        const leaderboard = [];
        snapshot.forEach(doc => {
            leaderboard.push({ id: doc.id, ...doc.data() });
        });
        res.json(leaderboard);
    } catch (error) {
        res.status(500).send('Error getting leaderboard: ' + error.message);
    }
});

/**
 * @swagger
 * /leaderboard:
 *   post:
 *     summary: Add a new entry to the leaderboard
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               score:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Entry added to leaderboard
 *       400:
 *         description: Name and score are required
 *       500:
 *         description: Error adding entry to leaderboard
 */
router.post('/', async (req, res) => {
    try {
        const { name, score } = req.body;
        if (!name || !score) {
            return res.status(400).send('Name and score are required');
        }
        const leaderboardRef = db.collection('leaderboard');
        await leaderboardRef.add({ name, score });
        res.status(201).send('Entry added to leaderboard');
    } catch (error) {
        res.status(500).send('Error adding entry to leaderboard: ' + error.message);
    }
});

module.exports = router;