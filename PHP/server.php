<php>
$hashedPassword = password_hash($password, PASSWORD_BCRYPT);

// Assuming $username and $password are user inputs
$query = "SELECT id, username, password FROM users WHERE username = ?";
$stmt = $pdo->prepare($query);
$stmt->execute([$username]);
$user = $stmt->fetch(PDO::FETCH_ASSOC);

if ($user && password_verify($password, $user['password'])) {
    // Successful login
} else {
    // Invalid credentials
}


session_start();
$_SESSION['user_id'] = $user['id'];
</php>