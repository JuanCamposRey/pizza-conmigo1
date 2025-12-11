import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { CreateClienteDto } from '../../clientes/dto/create-cliente.dto';
import { Type } from 'class-transformer';
import { CreateDateColumn } from 'typeorm';
export class CreatePedidoDto extends CreateClienteDto {
  @IsNotEmpty()
  @IsNumber()
  monto: number;

  @IsNotEmpty()
  @IsString()
  direccion_pedido: string;

  @IsNotEmpty()
  @IsNumber()
  cantidad: number;
  @CreateDateColumn({ type: 'timestamp' })
  fecha: Date;

}
