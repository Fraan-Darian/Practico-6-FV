
#Importar libreria
import morfobasin


##INPUTS

#Ingresar dem a trabajar--->Definir ruta

dem=r'E:\Respaldo\UACh\S1\SIGYTIC\31Mayo\Semana_11\Fran\cuenca_prac_6.tif'


#OUTPUTS
#Definir ruta de archivos de salida para cada funcion

#Output función 1 libreria-->cuencastats
bas_path=r'E:\Respaldo\UACh\S1\SIGYTIC\31Mayo\Semana_11\Fran\Output\output_cuenca_stats.gpkg'

output1=morfobasin.cuencastats(dem, bas_path, 10)

print('Cuenca stats, resultados obtenidos')

# Output funcion 2 libreria-->cuencaindex
basin_path = r'E:\Respaldo\UACh\S1\SIGYTIC\31Mayo\Semana_11\Fran\Output\output_cuenca_index.gpkg'

output2 = morfobasin.cuencaindex(dem,basin_path,10, 5)

print('Cuenca index, resultados obtenidos')

