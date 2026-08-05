import styles from './Logo.module.css';

type AppLogo = {
  children: React.ReactNode;
};

export function Logo({ children }: AppLogo) {
  return <div className={styles.logo}>{children}</div>;
}
