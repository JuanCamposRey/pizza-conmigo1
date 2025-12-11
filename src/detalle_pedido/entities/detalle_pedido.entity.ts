import { Pedido } from '../../pedidos/entities/pedido.entity';
import { Pizza } from '../../pizzas/entities/pizza.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity()
export class DetallePedido {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => Pizza, pizza => pizza.detallePedidos, { onDelete: 'CASCADE' })
  @JoinColumn()
  pizza: Pizza;
  @ManyToOne(() => Pedido, pedido => pedido.detalles, { onDelete: 'RESTRICT' })
  @JoinColumn()
  pedido: Pedido;
  @Column()
  cantidad: number;
 @Column('int', { name: 'pizza_personalizada_id', nullable: true })
  pizzaPersonalizadaId: number;
  
}