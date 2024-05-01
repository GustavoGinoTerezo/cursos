import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { FiliacaoEntity } from "./filiacao.entity";

@Entity('user')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id_user: number;

    @Column({ length: 40 })
    nome: string;

    @Column({ unique: true, length: 40 })
    email: string;
    
    @Column()
    senha: string;

    @OneToMany(() => FiliacaoEntity, filiacao => filiacao.user)
    filiacoes: FiliacaoEntity[];
}
