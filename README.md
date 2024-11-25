# Vanilla-Front-PromessesJS

# Promesse JS



# 📚️ Ressources

* [Utiliser les promesses](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Utiliser_les_promesses)
* [Apprendre le JavaScript : Promise](https://www.youtube.com/watch?v=05mKXSdkCJg)
* [JavaScript Promises In 10 Minutes](https://www.youtube.com/watch?v=DHvZLI7Db8E)
* [JavaScript Async Await](https://www.youtube.com/watch?v=V_Kr9OSfDeU)


# 🔉 TP beat-box

Vous avez réussi à coder un magnifique Drumpad, nous allons donc l'utiliser pour faire une boîte à musique.

Le principe est simple, nous allons coder un enchaînement de sons lors de la pression d'un bouton, comme du papier à musique passé dans un vieux piano de saloon américain.

Pour ce faire nous allons devoir utiliser les promesses JavaScript.

Pour réaliser ce TP vous allez devoir comprendre et intégrer une nouvelle fonctionnalité de JavaScript qui est normalement utilisée pour gérer des requêtes API par exemple.

Dans le contexte de ce TP, vous êtes lancés dans le grand bain sans brassards. Vous n'avez que ces consignes pour arriver à un résultat. 


## **Consignes :**



* A l'aide des ressources et de tous tutoriels que vous pouvez trouver sur le net, nous allons coder la fonction beatBox()
* Cette fonction se déclenche quand on appuie sur un nouveau bouton créé à cette occasion
* La fonction beatBox() contient 2 fonctions :
    * une fonction simulateKey() qui simule la pression d'une touche de clavier (ce qui permet de déclencher le code de votre drumpad déjà fait)
        * Pour simuler la pression d'une touche, je veux créer et paramétrer un nouvel event js
        * ensuite je veux dispatch cet event dans le document
    * une fonction playBeat() qui renvoie une nouvelle promesse
* Dans la fonction beatBox() toujours, faites une chaîne de promesse pour créer un beat


## **Comportement attendu :**



* la fonction playBeat() prend dans ses arguments une variable de temps utilisé avec un setTimeout()


# 🏆 Objectifs



* Appréhender de nouveaux concept sans en avoir peur
* Comprendre que JS est un langage asynchrone
* Être initié aux promesses
