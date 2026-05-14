-- Deleta o banco de dados caso exista
DROP DATABASE IF EXISTS sistema_trocas;

-- Cria o banco de dados
CREATE DATABASE IF NOT EXISTS sistema_trocas;

-- Utiliza o banco criado para criação das tabelas
USE sistema_trocas;

-- Deleta as tabelas caso existam
DROP TABLE IF EXISTS interesses;
DROP TABLE IF EXISTS produtos;
DROP TABLE IF EXISTS usuarios;

-- TABELA USUÁRIOS
CREATE TABLE usuarios(
	id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(100),
    senha VARCHAR(255),
	telefone VARCHAR(20),
    foto VARCHAR(255),
    perfil ENUM('administrador','ofertante','interessado')
);

-- TABELA PRODUTOS
CREATE TABLE produtos(
	id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    descricao TEXT,
    preco DECIMAL(10,2),
    condicao ENUM('novo','usado') DEFAULT 'usado',
    foto VARCHAR(255),
    is_publico BOOLEAN DEFAULT TRUE,
    status_troca BOOLEAN DEFAULT FALSE,
	id_usuario INT NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
    ON DELETE CASCADE
);

-- TABELA INTERESSES
CREATE TABLE interesses(
	id INT AUTO_INCREMENT PRIMARY KEY,
    id_produto INT,
    id_interessado INT,
	data_interesse DATETIME DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (id_produto)
    REFERENCES produtos(id)
    ON DELETE CASCADE,
    FOREIGN KEY (id_interessado)
    REFERENCES usuarios(id)
    ON DELETE CASCADE
);

-- INSERTS DE USUÁRIOS
-- ADMIN
INSERT INTO usuarios(nome, email, senha, telefone, perfil)
VALUES(
	'Admin João',
    'joao@gmail.com',
    '$2a$10$bnVggkOhZQJP9ipjXWe01eztcGAB/T3ptXbA36MzwiAyAn6EkYaca',
    '27992784792',
    'administrador'
);

-- OFERTANTE
INSERT INTO usuarios(nome, email, senha, telefone, perfil)
VALUES(
	'Joaozin das Oferta',
    'ofertante@gmail.com',
    'senha-top-jaja',
    '27992784792',
    'ofertante'
);

-- INTERESSADO
INSERT INTO usuarios(nome, email, senha, telefone, perfil)
VALUES(
	'Joaozin Interessado',
    'interessado@gmail.com',
    'senha-top-jaja',
    '27992784792',
    'interessado'
);