# Politique de Sécurité pour Ysport

## Versions Supportées

Versions actuellement supportées de Ysport :

| Version | Support           |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Fonctionnalités de Sécurité

### Protection des Données
- Les données de localisation des utilisateurs sont traitées avec précaution et stockées de manière sécurisée
- Aucune information personnelle sensible n'est collectée sans consentement explicite
- Les données cartographiques sont accessibles via des points d'accès API sécurisés

### Sécurité de l'API
- Limitation du nombre de requêtes pour prévenir les abus
- Politiques CORS correctement configurées
- Clés API et secrets stockés de manière sécurisée via des variables d'environnement

### Sécurité de la Base de Données
- Chaîne de connexion MongoDB sécurisée et non exposée dans le code
- Accès à la base de données restreint aux adresses IP autorisées
- Sauvegardes régulières de la base de données

## Bonnes Pratiques pour les Contributeurs
1. Ne jamais commit d'informations sensibles (clés API, mots de passe, etc.)
2. Toujours vérifier le code pour les vulnérabilités avant de soumettre des PR
3. Maintenir les dépendances à jour pour corriger les failles de sécurité
4. Utiliser des variables d'environnement pour la configuration sensible
5. Suivre les pratiques de codage sécurisé

## Signalement d'une Vulnérabilité

Si vous découvrez une vulnérabilité de sécurité dans Ysport, veuillez suivre ces étapes :

1. **Ne pas** créer un ticket GitHub public
2. Envoyer un email à [yaomanuit@gmail.com]
3. Inclure :
   - Une description de la vulnérabilité
   - Les étapes pour reproduire le problème
   - L'impact potentiel
   - Solution proposée (si possible)

### Processus de Traitement
- Accusé de réception de votre rapport sous 72 heures
- Mises à jour régulières sur l'avancement du traitement
- Reconnaissance de la divulgation responsable (si souhaité)
- Délai de résolution selon la gravité :
  - Critique : 48-72 heures
  - Élevée : 1 semaine
  - Moyenne : 2 semaines
  - Faible : 1 mois

## Mises à Jour de Sécurité
- Les correctifs de sécurité seront publiés dès que possible
- Les utilisateurs seront notifiés via le dépôt GitHub
- Les mises à jour critiques seront mises en évidence dans les notes de version

## Contact
Pour les questions liées à la sécurité, contactez :
- Équipe Sécurité : [yaomanuit@gmail.com]
- Chef de Projet : [yaomanuit@gmail.com]

## Remerciements
Nous apprécions les efforts de la communauté de recherche en sécurité pour aider à maintenir Ysport sécurisé. Les contributeurs qui signalent des problèmes de sécurité valides seront remerciés dans notre fichier CONTRIBUTORS.md (avec leur permission).

## Dernières Mises à Jour
Dernière mise à jour : Novembre 2024
Prochaine révision : Mai 2025