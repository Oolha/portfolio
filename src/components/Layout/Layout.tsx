import css from "./Layout.module.css";
interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return <div className={css.container}>{children}</div>;
};
