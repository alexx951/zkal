<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Traitez les données comme vous le souhaitez, par exemple :
    echo "Nom d'utilisateur : " . $username . "<br>";
    echo "Email : " . $email . "<br>";
    // Ne jamais stocker les mots de passe en clair ! Cet exemple est uniquement à des fins de démonstration.
    echo "Mot de passe : " . $password . "<br>";
}
?>