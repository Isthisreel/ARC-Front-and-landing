# Intégration Spline

1. **Lazy Loading** : Les scènes 3D Spline sont lourdes. Elles doivent être chargées de manière asynchrone pour ne pas bloquer le chargement initial de la page (LCP).
2. **Transparence** : Le fond du canvas Spline doit être configuré à "transparent" pour se fondre parfaitement dans le "Abyss Dark" du site. Pas de rectangle noir visible autour de l'objet 3D.
3. **Interactivité Non-Bloquante** : L'interactivité (orbit, pan) doit réagir au mouvement de la souris (Mouse Hover) si possible, mais ne doit JAMAIS bloquer le scroll de la page (paramètre `zoom={false}` ou gestion des événements pointeur).
4. **Responsive** : La scène doit s'adapter aux écrans mobiles (masquer ou simplifier si nécessaire).
