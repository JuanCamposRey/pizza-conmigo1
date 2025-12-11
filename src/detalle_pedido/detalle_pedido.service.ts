import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDetallePedidoDto } from './dto/create-detalle_pedido.dto';
import { UpdateDetallePedidoDto } from './dto/update-detalle_pedido.dto';
import { DetallePedido } from './entities/detalle_pedido.entity';
import { Pedido } from '../pedidos/entities/pedido.entity';
import { Pizza } from '../pizzas/entities/pizza.entity';
@Injectable()
export class DetallePedidoService {
  constructor(
    @InjectRepository(DetallePedido)
    private readonly detallePedidoRepository: Repository<DetallePedido>,
    @InjectRepository(Pedido)
    private readonly pedidoRepository: Repository<Pedido>,
    @InjectRepository(Pizza)
    private readonly pizzaRepository: Repository<Pizza>,
  ) {}
  
  async create(dto: CreateDetallePedidoDto): Promise<DetallePedido> {
    try {
      const pedido = await this.pedidoRepository.findOne({
        where: { id: dto.pedidoId },
      });
      if (!pedido) {
        throw new NotFoundException('Pedido no encontrado');
      }
      const pizza = await this.pizzaRepository.findOne({
        where: { id: dto.pizzaId },
      });
      if (!pizza) {
        throw new NotFoundException('Pizza no encontrada');
      }
      const detalle = this.detallePedidoRepository.create({
        cantidad: dto.cantidad,
        pizzaPersonalizadaId: dto.pizzaPersonalizadaId ?? null,
        pedido,
        pizza,
      });
      return await this.detallePedidoRepository.save(detalle);
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException(
        'Error al crear el detalle de pedido',
      );
    }
  }
 
  async findAll(): Promise<DetallePedido[]> {
    return this.detallePedidoRepository.find({
      relations: ['pedido', 'pizza'],
    });
  }
  
  async findOne(id: number): Promise<DetallePedido> {
    const detalle = await this.detallePedidoRepository.findOne({
      where: { id },
      relations: ['pedido', 'pizza'],
    });
    if (!detalle) {
      throw new NotFoundException('Detalle no encontrado');
    }
    return detalle;
  }
 
  async update(
    id: number,
    updateDto: UpdateDetallePedidoDto,
  ): Promise<string> {
    return `Esta acción actualiza el detalle ${id}`;
  }

  async remove(id: number): Promise<string> {
    return `Esta acción elimina el detalle ${id}`;
  }
}
