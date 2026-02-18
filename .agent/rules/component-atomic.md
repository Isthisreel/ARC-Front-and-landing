# Atomicité des Composants

1. **Isolation** : Chaque widget (ex: USDC Stream, Terminal, Fleet Map) doit être un composant React indépendant (`.tsx`) situé dans son propre dossier ou fichier.
2. **Réutilisabilité** : Les composants doivent accepter des props pour leurs données (ex: `balance`, `logs`, `nodeStatus`) et ne pas dépendre d'un état global complexe si ce n'est pas nécessaire.
3. **Responsabilité Unique** : Un composant ne doit faire qu'une seule chose bien (ex: afficher le log, PAS récupérer les données ET afficher).
4. **Strict Types** : Toutes les props doivent être typées avec TypeScript (Interfaces ou Types).
