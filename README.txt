L'objectif est de créer une api avec un serveur express permettant de répondre aux deux exercices ci-dessous (votre source de données est au format JSON, le document data.json):

Premier exercice :

- Récupérer la liste des personnes ayant une région particulière :
	. La région devra être saisie par l'utilisateur sous forme de variable.
	. La réponse à la méthode devra être sous la forme de :
		- total : nombre total de résultats
		- offset : nombre de résultats maximum en réponse (par défaut 10)
		- data : ensemble des personnes dont la région est identique à celle demandée.

Deuxième exercice :

- Faire une méthode "checkPhone" qui permet de vérifier le numéro de téléphone d'une personne, voici les règles de vérification :
	. Le numéro doit commencer par 02 ou 06 ou 07 et il doit respecter les standards d'un numéro de téléphone français.
	


LANCER LE PROJET :

npm install
nodemon server
