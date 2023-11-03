'use client';

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useTranslation } from "react-i18next";
import i18next from "i18next";

export default () => {
    const { t } = useTranslation();

    const schema = z.object({
        username: z.string().min(1, t('message.username', { number: 10 })),
        email: z.string().email({ message: t('message.email')}),
        password: z.string().min(8).max(20),
    });

    const { register, handleSubmit, formState: { errors }, } = useForm({ resolver: zodResolver(schema) });

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div>
            <button onClick={() => i18next.changeLanguage('fr')}>FR</button>
            <button onClick={() => i18next.changeLanguage('en')}>EN</button>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Username</label>
                    <input {...register('username')}></input>
                    {errors.username?.message && <p>{errors.username?.message}</p>}
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" {...register('email')}></input>
                    {errors.email?.message && <p>{errors.email?.message}</p>}
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" {...register('password')}></input>
                    {errors.password?.message && <p>{errors.password?.message}</p>}
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}