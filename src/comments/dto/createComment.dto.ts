import { IsNotEmpty, IsOptional, IsString, MaxLength, NotContains } from "class-validator";

export class CreateCommentDto {
    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    text: string;
  
    @IsString()
    @IsOptional()
    image?: string;
  
    // @IsOptional()
    // @IsString({ each: true })
    // @NotContains(' ', { each: true })
    // hashtags?: string[];
  }