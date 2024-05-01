import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import { UserEntity } from "./user.entity";

@Entity('filiacao')
export class FiliacaoEntity {

    @PrimaryGeneratedColumn()
    id_perfil: number;

    @Column({ length: 40 })
    nome: string;

    @Column({ length: 40 })
    endereco: string;

    @Column({ length: 30 })
    cidade: string;

    @Column({ length: 30 })
    bairro: string;

    @Column({ length: 2 })
    uf: string;

    @ManyToOne(() => UserEntity, user => user.filiacoes)
    user: UserEntity;

}
