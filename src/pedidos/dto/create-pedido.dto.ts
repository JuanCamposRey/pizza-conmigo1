import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { CreateClienteDto } from '../../clientes/dto/create-cliente.dto';
import { Type } from 'class-transformer';
export class CreatePedidoDto extends CreateClienteDto {
  @IsNotEmpty()
  @IsNumber()
  monto: number;

  @IsNotEmpty()
  @IsString()
  direccion_envio: string;

  @IsNotEmpty()
  @IsNumber()
  cantidad: number;

  @IsDate()
  @Type(() => Date)
  fecha_pedido: Date;
  
  @IsNotEmpty()
  @IsNumber()
  cliente_id: number;


  
}
