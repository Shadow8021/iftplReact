import bcrypt from 'bcryptjs';
type LoginAdminProps = {
    userName: string;
    password: string;
};
type HashPasswordResult = {
    hashedPassword: string;
};

const saltRounds = 10; // Facteur de travail

const hashPassword = async (plainPassword: string): Promise<HashPasswordResult> => {
    try {
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(plainPassword, salt);
        return { hashedPassword };
    } catch (error) {
        throw error;
    }
};



export function LoginAdmin({ userName, password }: LoginAdminProps): boolean {
    hashPassword(password).then(() => {
        if (userName === "admin@iftpl.com" && password === "admin") {
            return true;
        } else {
            return false;
        }
    }).catch(error => {
        console.error('Erreur dans LoginAdmin :', error);
    });
    return true;
}

