-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 24/10/2023 às 20:59
-- Versão do servidor: 10.4.28-MariaDB
-- Versão do PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `bd_meeterhub_2`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `autor`
--

CREATE TABLE `autor` (
  `codigo` int(5) NOT NULL,
  `nome` varchar(50) DEFAULT NULL,
  `endereco` varchar(200) DEFAULT NULL,
  `URL` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `autor`
--

INSERT INTO `autor` (`codigo`, `nome`, `endereco`, `URL`) VALUES
(2, 'Teste', 'Rua teste, 123', 'Teste');

-- --------------------------------------------------------

--
-- Estrutura para tabela `carrinho_compras`
--

CREATE TABLE `carrinho_compras` (
  `codigo` int(5) NOT NULL,
  `codigo_cliente` int(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `carrinho_compras`
--

INSERT INTO `carrinho_compras` (`codigo`, `codigo_cliente`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Estrutura para tabela `cliente`
--

CREATE TABLE `cliente` (
  `codigo` int(5) NOT NULL,
  `email` varchar(200) DEFAULT NULL,
  `nome` varchar(50) DEFAULT NULL,
  `endereco` varchar(200) DEFAULT NULL,
  `telefone` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `cliente`
--

INSERT INTO `cliente` (`codigo`, `email`, `nome`, `endereco`, `telefone`) VALUES
(1, 'teste2@teste.com', 'Teste Teste', 'Rua teste, 86317', '631873821');

-- --------------------------------------------------------

--
-- Estrutura para tabela `deposito`
--

CREATE TABLE `deposito` (
  `codigo` int(5) NOT NULL,
  `codigo_livro` int(5) DEFAULT NULL,
  `endereco` varchar(200) DEFAULT NULL,
  `telefone` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `deposito`
--

INSERT INTO `deposito` (`codigo`, `codigo_livro`, `endereco`, `telefone`) VALUES
(1, 3, 'Rua testando, 8976348', '9074982193481');

-- --------------------------------------------------------

--
-- Estrutura para tabela `editora`
--

CREATE TABLE `editora` (
  `codigo` int(5) NOT NULL,
  `nome` varchar(50) DEFAULT NULL,
  `endereco` varchar(200) DEFAULT NULL,
  `telefone` varchar(20) DEFAULT NULL,
  `URL` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `editora`
--

INSERT INTO `editora` (`codigo`, `nome`, `endereco`, `telefone`, `URL`) VALUES
(1, 'Teste', 'Rua teste, 123', '12345678', 'Teste');

-- --------------------------------------------------------

--
-- Estrutura para tabela `itens_carrinho`
--

CREATE TABLE `itens_carrinho` (
  `codigo` int(5) NOT NULL,
  `codigo_carrinho` int(5) DEFAULT NULL,
  `codigo_livro` int(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `itens_carrinho`
--

INSERT INTO `itens_carrinho` (`codigo`, `codigo_carrinho`, `codigo_livro`) VALUES
(1, 1, 3);

-- --------------------------------------------------------

--
-- Estrutura para tabela `livro`
--

CREATE TABLE `livro` (
  `codigo` int(5) NOT NULL,
  `codigo_editora` int(5) DEFAULT NULL,
  `codigo_autor` int(5) DEFAULT NULL,
  `ISBN` varchar(50) DEFAULT NULL,
  `titulo` varchar(200) DEFAULT NULL,
  `ano` int(5) DEFAULT NULL,
  `preco` decimal(50,0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `livro`
--

INSERT INTO `livro` (`codigo`, `codigo_editora`, `codigo_autor`, `ISBN`, `titulo`, `ano`, `preco`) VALUES
(3, 1, 2, 'Teste2', 'Testando2', 1995, 22);

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `autor`
--
ALTER TABLE `autor`
  ADD PRIMARY KEY (`codigo`),
  ADD UNIQUE KEY `nome` (`nome`);

--
-- Índices de tabela `carrinho_compras`
--
ALTER TABLE `carrinho_compras`
  ADD PRIMARY KEY (`codigo`),
  ADD KEY `codigo_cliente` (`codigo_cliente`);

--
-- Índices de tabela `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`codigo`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `nome` (`nome`);

--
-- Índices de tabela `deposito`
--
ALTER TABLE `deposito`
  ADD PRIMARY KEY (`codigo`),
  ADD KEY `codigo_livro` (`codigo_livro`);

--
-- Índices de tabela `editora`
--
ALTER TABLE `editora`
  ADD PRIMARY KEY (`codigo`),
  ADD UNIQUE KEY `nome` (`nome`);

--
-- Índices de tabela `itens_carrinho`
--
ALTER TABLE `itens_carrinho`
  ADD PRIMARY KEY (`codigo`),
  ADD KEY `codigo_carrinho` (`codigo_carrinho`),
  ADD KEY `codigo_livro` (`codigo_livro`);

--
-- Índices de tabela `livro`
--
ALTER TABLE `livro`
  ADD PRIMARY KEY (`codigo`),
  ADD UNIQUE KEY `titulo` (`titulo`),
  ADD KEY `codigo_editora` (`codigo_editora`),
  ADD KEY `codigo_autor` (`codigo_autor`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `autor`
--
ALTER TABLE `autor`
  MODIFY `codigo` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `carrinho_compras`
--
ALTER TABLE `carrinho_compras`
  MODIFY `codigo` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `cliente`
--
ALTER TABLE `cliente`
  MODIFY `codigo` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `deposito`
--
ALTER TABLE `deposito`
  MODIFY `codigo` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `editora`
--
ALTER TABLE `editora`
  MODIFY `codigo` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `itens_carrinho`
--
ALTER TABLE `itens_carrinho`
  MODIFY `codigo` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `livro`
--
ALTER TABLE `livro`
  MODIFY `codigo` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `carrinho_compras`
--
ALTER TABLE `carrinho_compras`
  ADD CONSTRAINT `carrinho_compras_ibfk_1` FOREIGN KEY (`codigo_cliente`) REFERENCES `cliente` (`codigo`);

--
-- Restrições para tabelas `deposito`
--
ALTER TABLE `deposito`
  ADD CONSTRAINT `deposito_ibfk_1` FOREIGN KEY (`codigo_livro`) REFERENCES `livro` (`codigo`);

--
-- Restrições para tabelas `itens_carrinho`
--
ALTER TABLE `itens_carrinho`
  ADD CONSTRAINT `itens_carrinho_ibfk_1` FOREIGN KEY (`codigo_carrinho`) REFERENCES `carrinho_compras` (`codigo`),
  ADD CONSTRAINT `itens_carrinho_ibfk_2` FOREIGN KEY (`codigo_livro`) REFERENCES `livro` (`codigo`);

--
-- Restrições para tabelas `livro`
--
ALTER TABLE `livro`
  ADD CONSTRAINT `livro_ibfk_1` FOREIGN KEY (`codigo_editora`) REFERENCES `editora` (`codigo`),
  ADD CONSTRAINT `livro_ibfk_2` FOREIGN KEY (`codigo_autor`) REFERENCES `autor` (`codigo`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
