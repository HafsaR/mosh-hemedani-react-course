import styles from "./Button.module.css";

interface Props {
  color?: "primary" | "secondary" | "success" | "dark";
  children: string;
  showAlert: boolean;
  onClick: () => void;
}

function ExerciseButton({
  color = "primary",
  children,
  showAlert,
  onClick,
}: Props) {
  return (
    <>
      <button
        type="button"
        className={[styles.bnt].join(" ")}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
}

export default ExerciseButton;
