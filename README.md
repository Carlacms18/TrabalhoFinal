# Trip Planner App

## **Descrição**
Este projeto é uma aplicação de planejamento de viagens desenvolvida em **React** com **TailwindCSS** para estilização. Ele permite que os usuários selecionem destinos, atividades e datas de viagem, adicionem esses planos à lista, editem ou removam planos e os mantenham salvos usando **Local Storage**.

---

## **Funcionalidades Principais**

### **Formulário de Viagem**
- Seleção de **destino** (São Pedro, Baía das Gatas, Mindelo Tour, etc.).
- Seleção de **atividades** (Experiência com tartarugas, hiking, etc.).
- Escolha das **datas de viagem** (De / Para).
- **Validação** para garantir que todos os campos estejam preenchidos.

### **Adicionar Viagens à Lista**
- O usuário pode **adicionar** os planos de viagem na lista.
- Exibe o **destino, atividade e datas** escolhidas na lista abaixo do formulário.

### **Edição e Atualização de Planos**
- Permite que o usuário **edite** um plano já adicionado.
- **Modo de edição** ativado ao clicar no botão **EDIT** ao lado do plano.

### **Remoção de Viagens**
- O usuário pode **remover** qualquer plano da lista usando o botão **REMOVE**.

### **Armazenamento no Local Storage**
- Os planos de viagem são **salvos automaticamente** no **Local Storage** do navegador.
- Os dados são **carregados automaticamente** na inicialização da aplicação para garantir **persistência** entre sessões.

---

## **Tecnologias Utilizadas**
- **ReactJS**: Criação da interface do usuário.
- **TailwindCSS**: Estilização do formulário e lista.
- **Local Storage**: Persistência de dados no navegador.
