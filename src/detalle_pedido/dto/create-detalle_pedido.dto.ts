import { IsInt, IsNotEmpty, IsNumber, Min, IsOptional } from 'class-validator';
export class CreateDetallePedidoDto {
  @IsNotEmpty()
  @IsNumber()
  pedidoId: number;
  @IsNotEmpty()
  @IsNumber()
  pizzaId: number;
  @IsInt()
  @Min(1)
  cantidad: number;
  @IsOptional()
  @IsNumber()
  pizzaPersonalizadaId?: number;
}