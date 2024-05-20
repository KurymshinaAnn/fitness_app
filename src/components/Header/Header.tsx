import classNames from "classnames";
import styles from "./Header.module.css";
import Link from "next/link";

export default function Header() {
    // logic

    return (
        <div className={styles.header}>

            <div className={styles.header__title}>
                <Link href={"/"}>
                    <div className={styles.header__logo}>
                        <svg width="29" height="20" viewBox="0 0 29 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.68844 19.4581C1.54195 20.698 0 19.6648 0 17.827C0 15.8705 0 10.0003 0 10.0003C0 10.0003 0 4.13012 0 2.1737C0 0.33591 1.54099 -0.697309 3.68844 0.542554C7.03156 2.47314 17.06 8.26682 17.06 8.26682C18.3934 9.03695 18.3934 10.9628 17.06 11.7329C17.06 11.7338 7.03156 17.5275 3.68844 19.4581Z" fill="#00C1FF" />
                            <path d="M14.7265 19.4574C12.58 20.6972 11.0381 19.664 11.0381 17.8262C11.0381 15.8698 11.0381 9.9996 11.0381 9.9996C11.0381 9.9996 11.0381 4.12939 11.0381 2.17297C11.0381 0.335178 12.5791 -0.698041 14.7265 0.541821C17.996 2.43032 27.8044 8.09676 27.8044 8.09676C29.2689 8.94246 29.2689 11.0567 27.8044 11.9024C27.8034 11.9024 17.996 17.5689 14.7265 19.4574Z" fill="#BCEC30" />
                            <mask id="mask0_38_1239" maskUnits="userSpaceOnUse" x="11" y="0" width="18" height="20">
                                <path d="M14.7265 19.4574C12.58 20.6972 11.0381 19.664 11.0381 17.8262C11.0381 15.8698 11.0381 9.9996 11.0381 9.9996C11.0381 9.9996 11.0381 4.12939 11.0381 2.17297C11.0381 0.335178 12.5791 -0.698041 14.7265 0.541821C17.996 2.43032 27.8044 8.09676 27.8044 8.09676C29.2689 8.94246 29.2689 11.0567 27.8044 11.9024C27.8035 11.9024 17.996 17.5689 14.7265 19.4574Z" fill="#6FE4FF" />
                            </mask>
                            <g mask="url(#mask0_38_1239)">
                                <g filter="url(#filter0_f_38_1239)">
                                    <path d="M3.68893 19.4585C1.54244 20.6983 0.000488281 19.6651 0.000488281 17.8273C0.000488281 15.8709 0.000488281 10.0007 0.000488281 10.0007C0.000488281 10.0007 0.000488281 4.13049 0.000488281 2.17407C0.000488281 0.336277 1.54148 -0.696943 3.68893 0.54292C7.03205 2.47351 17.0605 8.26719 17.0605 8.26719C18.3939 9.03732 18.3939 10.9631 17.0605 11.7333C17.0605 11.7342 7.03205 17.5279 3.68893 19.4585Z" fill="#99D100" />
                                </g>
                            </g>
                            <defs>
                                <filter id="filter0_f_38_1239" x="-1.46075" y="-1.46014" width="20.9825" height="22.9216" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feGaussianBlur stdDeviation="0.730621" result="effect1_foregroundBlur_38_1239" />
                                </filter>
                            </defs>
                        </svg>
                        <svg width="184" height="30" viewBox="0 0 184 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.400117 6.01197C0.400117 8.78397 1.82812 10.436 3.67612 11.752L6.05612 13.46C7.31612 14.356 8.24012 15.392 8.24012 16.96C8.24012 18.36 7.31612 19.2 5.86012 19.2C4.43212 19.2 3.48012 18.164 3.48012 16.484V15H0.120117V16.68C0.120117 20.292 2.69612 22.28 5.86012 22.28C9.02412 22.28 11.6001 20.376 11.6001 16.54C11.6001 13.852 10.1161 12.2 8.29612 10.884L5.83212 9.11997C4.65612 8.27997 3.76012 7.41197 3.76012 6.01197C3.76012 4.58397 4.60012 3.79997 5.83212 3.79997C7.14812 3.79997 7.96012 4.61197 7.96012 6.40397V7.71997H11.3201V6.31997C11.3201 2.53997 8.88412 0.719971 5.83212 0.719971C2.83612 0.719971 0.400117 2.23197 0.400117 6.01197Z" fill="black" />
                            <path d="M18.47 0.99997H15.11V22H18.47V14.636L24.49 22H28.69L22.166 14.356L28.326 7.99997H23.902L18.47 14.104V0.99997Z" fill="black" />
                            <path d="M38.138 23.456L43.43 7.99997H40.07L36.542 18.78L33.042 7.99997H29.682L34.946 23.428C34.134 25.388 33.154 26.312 31.586 26.312C30.914 26.312 30.27 26.172 29.738 26.004V28.972C30.27 29.14 31.082 29.28 31.894 29.28C35.45 29.28 36.962 26.9 38.138 23.456Z" fill="black" />
                            <path d="M50.4493 22V13.32H55.8813V10.24H50.4493V4.07997H56.7213V0.99997H47.0893V22H50.4493Z" fill="black" />
                            <path d="M61.47 5.19997C62.702 5.19997 63.57 4.27597 63.57 3.09997C63.57 1.89597 62.702 0.99997 61.47 0.99997C60.266 0.99997 59.37 1.89597 59.37 3.09997C59.37 4.27597 60.266 5.19997 61.47 5.19997ZM63.15 22V7.99997H59.79V22H63.15Z" fill="black" />
                            <path d="M71.8234 17.212V10.94H75.4634V7.99997H71.8234V3.79997H68.4634V7.99997H66.2234V10.94H68.4634V17.436C68.4634 21.188 70.4794 22.28 73.2514 22.28C74.0634 22.28 74.9594 22.112 75.4634 21.944V18.948C74.9874 19.116 74.3994 19.2 73.9234 19.2C72.4674 19.2 71.8234 18.584 71.8234 17.212Z" fill="black" />
                            <path d="M88.3335 14.3V22H91.6936V13.628C91.6936 9.67997 89.4536 7.71997 86.4855 7.71997C84.7495 7.71997 83.3216 8.53197 82.4536 10.016V7.99997H79.0936V22H82.4536V14.3C82.4536 11.948 83.5736 10.66 85.3936 10.66C87.2136 10.66 88.3335 11.948 88.3335 14.3Z" fill="black" />
                            <path d="M108.884 16.12C108.912 15.756 108.94 15.392 108.94 15C108.94 10.716 106 7.71997 101.996 7.71997C97.9925 7.71997 95.0525 10.716 95.0525 15C95.0525 19.284 97.9925 22.28 101.996 22.28C105.3 22.28 107.736 20.712 108.576 17.8H104.936C104.488 18.78 103.62 19.34 102.136 19.34C100.064 19.34 98.7205 18.164 98.3565 16.12H108.884ZM101.996 10.66C103.956 10.66 105.244 11.78 105.608 13.74H98.3845C98.7485 11.78 100.036 10.66 101.996 10.66Z" fill="black" />
                            <path d="M123.484 17.968C123.484 12.2 115.252 14.496 115.252 11.808C115.252 10.912 116.092 10.38 117.352 10.38C118.724 10.38 119.732 11.276 119.732 12.452H123.232C123.232 9.79197 120.712 7.71997 117.352 7.71997C114.244 7.71997 111.864 9.34397 111.864 11.948C111.864 17.66 120.012 15.14 120.012 18.108C120.012 19.144 119.172 19.648 117.772 19.648C116.26 19.648 115.112 18.892 115.112 17.38H111.612C111.612 20.488 114.272 22.28 117.772 22.28C121.048 22.28 123.484 20.628 123.484 17.968Z" fill="black" />
                            <path d="M138.153 17.968C138.153 12.2 129.921 14.496 129.921 11.808C129.921 10.912 130.761 10.38 132.021 10.38C133.393 10.38 134.401 11.276 134.401 12.452H137.901C137.901 9.79197 135.381 7.71997 132.021 7.71997C128.913 7.71997 126.533 9.34397 126.533 11.948C126.533 17.66 134.681 15.14 134.681 18.108C134.681 19.144 133.841 19.648 132.441 19.648C130.929 19.648 129.781 18.892 129.781 17.38H126.281C126.281 20.488 128.941 22.28 132.441 22.28C135.717 22.28 138.153 20.628 138.153 17.968Z" fill="black" />
                            <path d="M146.151 22V14.16H148.923C152.367 14.16 154.831 12.032 154.831 8.13997V6.73997C154.831 2.98797 152.367 0.99997 148.923 0.99997H142.791V22H146.151ZM148.643 4.07997C150.379 4.07997 151.471 4.89197 151.471 7.01997V7.85997C151.471 10.156 150.379 11.08 148.643 11.08H146.151V4.07997H148.643Z" fill="black" />
                            <path d="M161.558 7.99997H158.198V22H161.558V14.86C161.558 12.508 163.014 11.22 165.506 11.22C166.066 11.22 166.57 11.304 166.962 11.444V7.77597C166.794 7.71997 166.514 7.71997 166.262 7.71997C164.218 7.71997 162.566 8.61597 161.558 10.268V7.99997Z" fill="black" />
                            <path d="M175.938 22.28C180.026 22.28 183.078 19.284 183.078 15C183.078 10.716 180.026 7.71997 175.938 7.71997C171.85 7.71997 168.798 10.716 168.798 15C168.798 19.284 171.85 22.28 175.938 22.28ZM175.938 19.2C173.782 19.2 172.158 17.52 172.158 15C172.158 12.48 173.782 10.8 175.938 10.8C178.094 10.8 179.718 12.48 179.718 15C179.718 17.52 178.094 19.2 175.938 19.2Z" fill="black" />
                        </svg>
                    </div>
                </Link>
                <p>Онлайн-тренировки для занятий дома</p>
            </div>

            <div className={styles.funcs}>
                <button className={styles.funcs__btn}>Войти</button>
                <div className={styles.funcs__user}>
                    <svg className={styles.funcs__user_logo} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M45.8334 25.0001C45.8334 36.506 36.506 45.8334 25.0001 45.8334C13.4941 45.8334 4.16675 36.506 4.16675 25.0001C4.16675 13.4941 13.4941 4.16675 25.0001 4.16675C36.506 4.16675 45.8334 13.4941 45.8334 25.0001ZM37.5001 32.4406C37.5001 35.8923 31.9036 39.5834 25.0001 39.5834C18.0965 39.5834 12.5001 35.8923 12.5001 32.4406C12.5001 28.9888 18.0965 27.0834 25.0001 27.0834C31.9036 27.0834 37.5001 28.9888 37.5001 32.4406ZM25.0001 22.9167C28.4519 22.9167 31.2501 20.1185 31.2501 16.6667C31.2501 13.215 28.4519 10.4167 25.0001 10.4167C21.5483 10.4167 18.7501 13.215 18.7501 16.6667C18.7501 20.1185 21.5483 22.9167 25.0001 22.9167Z" fill="#D9D9D9" />
                    </svg>
                    <p>Osetr</p>
                    <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.3553 1.03308L6.67773 6.7107L1.00012 1.03308" stroke="black" strokeWidth="2" />
                    </svg>
                </div>
            </div>

        </div>
    )
}
