type LoginAdminProps = {
    userName: string;
    password: string;
};
export function LoginAdmin({ userName, password }: LoginAdminProps): boolean {
    if (userName === "admin@iftpl.com" && password === "admin") {
        return true;
    } else {
        return false;
    }
}

