CREATE DATABASE IF NOT EXISTS numerical_db
  DEFAULT CHARACTER SET utf8mb4
  DEFAULT COLLATE utf8mb4_unicode_ci;

CREATE USER IF NOT EXISTS 'app_user'@'%' IDENTIFIED BY 'change_this_password';

GRANT ALL PRIVILEGES ON numerical_db.* TO 'app_user'@'%';

FLUSH PRIVILEGES;
