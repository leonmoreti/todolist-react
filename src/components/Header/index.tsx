import Logo from "../../assets/Logo.svg"
import { AiOutlinePlusCircle } from "react-icons/ai";
import styles from "./header.module.css";
import { ChangeEvent, FormEvent, useState } from "react";

interface Props {
    onAddTask: (taskTitle: string) => void;
}

export function Header ({ onAddTask }: Props) {
    const [title, setTitle] = useState("");

    function handleSubmit(event: FormEvent) {
        event.preventDefault();

        onAddTask(title);
        setTitle("");
    }

    function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value);
    }

    const isNewCommentEmpty = title.trim().length === 0

    return (
        <header className={styles.header}>
            <img src={Logo} />
            
            <form className={styles.NewTaskForm} onSubmit={handleSubmit}>
                <input
                    placeholder="Adicionar uma nova tarefa"
                    onChange={onChangeTitle}
                    value={title}
                    required
                    />
                <button type="submit" disabled={isNewCommentEmpty}>
                    Criar
                    <AiOutlinePlusCircle size={20} />
                </button>
            </form>
        </header>
    );
}