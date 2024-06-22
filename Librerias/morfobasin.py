def cuencastats(dem0, salida, sizekm2):
    """
    Datos morfometricos: Se usa para delimitar cuencas, calcular media, altitud 
    maxima-minima y pendiente media.
 
    Uso funcion:
    morfobasin.cuencastats(dem0, salida, sizekm2)
    
    Definicion :
    dem0 (str): ruta de entrada Dem
    salida (str): ruta de salida archivo GPKG con estadística y vectores
    sizekm2 (float): tamaño mínimo que debe tener la cuenca en km2
    
      """
    
    #########################################################################
    # Importando librerías
    import processing
    import geopandas as gpd
    import rasterio as rs
    
    dem = rs.open(dem0)
    s1, s2 = dem.res
    resArea = s1 * s2
    area = (sizekm2 * (10**6)) / resArea

    print('Cálculo de área, realizado')
    
    ##########################################################################
    #FUNCION 1
    ##PROCESOS
    #Pendiente como--> Archivo temporal
    pendiente = processing.run("native:slope", {'INPUT': dem0, 'Z_FACTOR': 1,'OUTPUT': 'TEMPORARY_OUTPUT', '--overwrite': True})
   
    print('Cálculo de pendiente, realizado')
    
    ##
    # Delimitación cuenca como-->Archivo temporal
    delim_cuenca = processing.run("grass7:r.watershed", {'elevation': dem0,'threshold': area,'accumulation': 'TEMPORARY_OUTPUT','drainage': 'TEMPORARY_OUTPUT','basin': 'TEMPORARY_OUTPUT',
        'stream': 'TEMPORARY_OUTPUT','half_basin': 'TEMPORARY_OUTPUT','length_slope': 'TEMPORARY_OUTPUT','slope_steepness': 'TEMPORARY_OUTPUT','tci': 'TEMPORARY_OUTPUT','spi': 'TEMPORARY_OUTPUT',
        'GRASS_REGION_CELLSIZE_PARAMETER': 0,'--overwrite': True})
    print('Delimitación de cuenca, realizada')

    
    ##
    # Poligonizar cuenca como-->Archivo temporal
    cuenca_vec = processing.run("gdal:polygonize", {'INPUT': delim_cuenca['basin'],'BAND': 1,'FIELD': 'DN','EIGHT_CONNECTEDNESS': False,
        'OUTPUT': 'TEMPORARY_OUTPUT','--overwrite': True})
    print('Poligonización, realizada')
    
    ##
    # Corregir geometría como-->Archivo tempora
    fix_geom = processing.run("native:fixgeometries", {'INPUT': cuenca_vec['OUTPUT'],'METHOD': 1,'OUTPUT': 'TEMPORARY_OUTPUT',
    '--overwrite': True})
    print('Corrección geometría, realizada')
    
    ##
    # Estadística de zona-->Pendiente y altitud
    stats_altitud = processing.run("native:zonalstatisticsfb", {'INPUT': fix_geom['OUTPUT'],'INPUT_RASTER': dem0,'RASTER_BAND': 1,
        'COLUMN_PREFIX': 'Altura_','STATISTICS': [2, 5, 6],'OUTPUT': 'TEMPORARY_OUTPUT','--overwrite': True})
    print('Estadísticas de zona altitud, realizada')
    
    stats_pendiente = processing.run("native:zonalstatisticsfb", {'INPUT': stats_altitud['OUTPUT'],'INPUT_RASTER': pendiente['OUTPUT'],
        'RASTER_BAND': 1,'COLUMN_PREFIX': 'Pendiente_','STATISTICS': [2],'OUTPUT': salida,'--overwrite': True})
    print('Estadísticas de zona pendiente, realizada')
    print('Cuenca stats, finalizada correctamente')


############################################################################

def cuencaindex(dem0, salida, sizekm2, umbral):
    """
    
    Parametros morfometricos y topograficos: Delimitacion de cuencas, calculo de media, altitud 
    maxima-minima, pendiente media, perimetro (km),area (km2), factor de compresion (adimensional), relieve (m),
    longitud de canales (km),densidad de canales (adimensional) y circularidad (adimensional). 
    Parametros obtenidos de la TABLA 1 de Karalis et al. (2014).
 

    Uso de funcion: 
    morfobasin.cuencaindex(dem0, salida, sizekm2, umbral)
    
    dem0 = Definicion de ruta dem 
    salida = Archivo de salida
    sizekm2 = 10 tamaño minimo cuenca
    umbral = 5
    
    
    Definicion:
    dem0 (str): ruta de entrada Dem
    salida (str): ruta de salida archivo GPKG con estadística y vectores
    sizekm2 (float): tamaño mínimo que debe tener la cuenca en km2 
    umbral (int): Umbral de detección para algoritmo Strahler order
    
    """
    
#############################################################################
    # Importar librerías
    import processing
    import geopandas as gpd
    import rasterio as rs
    
    dem = rs.open(dem0)
    s1, s2 = dem.res
    resArea = s1 * s2
    area = (sizekm2 * (10**6)) / resArea

    print('Cálculo de área, realizado')
    
############################################################################
    ##FUNCION 2
    ##PROCESOS
    #Pendiente como--> Archivo temporal
    pendiente = processing.run("native:slope", {'INPUT': dem0, 'Z_FACTOR': 1,'OUTPUT': 'TEMPORARY_OUTPUT', '--overwrite': True})
   
    print('Cálculo de pendiente, realizado')
    
    ##
    ##
    # Delimitación cuenca como-->Archivo temporal
    delim_cuenca = processing.run("grass7:r.watershed", {'elevation': dem0,'threshold': area,'accumulation': 'TEMPORARY_OUTPUT','drainage': 'TEMPORARY_OUTPUT','basin': 'TEMPORARY_OUTPUT',
        'stream': 'TEMPORARY_OUTPUT','half_basin': 'TEMPORARY_OUTPUT','length_slope': 'TEMPORARY_OUTPUT','slope_steepness': 'TEMPORARY_OUTPUT','tci': 'TEMPORARY_OUTPUT','spi': 'TEMPORARY_OUTPUT',
        'GRASS_REGION_CELLSIZE_PARAMETER': 0,'--overwrite': True})
    print('Delimitación de cuenca, realizada')
    
    ##
    # Poligonizar cuenca como-->Archivo temporal
    cuenca_vec = processing.run("gdal:polygonize", {'INPUT': delim_cuenca['basin'],'BAND': 1,'FIELD': 'DN','EIGHT_CONNECTEDNESS': False,
        'OUTPUT': 'TEMPORARY_OUTPUT','--overwrite': True})
    print('Poligonización, realizada')
    
    ##
    # Corregir geometría como-->Archivo tempora
    fix_geom = processing.run("native:fixgeometries", {'INPUT': cuenca_vec['OUTPUT'],'METHOD': 1,'OUTPUT': 'TEMPORARY_OUTPUT',
    '--overwrite': True})
    print('Corrección geometría, realizada')
    
    ##
    # Estadística de zona-->Pendiente y altitud
    stats_altitud = processing.run("native:zonalstatisticsfb", {'INPUT': fix_geom['OUTPUT'],'INPUT_RASTER': dem0,'RASTER_BAND': 1,
        'COLUMN_PREFIX': 'Altura_','STATISTICS': [2, 5, 6],'OUTPUT': 'TEMPORARY_OUTPUT','--overwrite': True})
    print('Estadísticas de zona altitud, realizada')
    
    stats_pendiente = processing.run("native:zonalstatisticsfb", {'INPUT': stats_altitud['OUTPUT'],'INPUT_RASTER': pendiente['OUTPUT'],
        'RASTER_BAND': 1,'COLUMN_PREFIX': 'Pendiente_','STATISTICS': [2],'OUTPUT': 'TEMPORARY_OUTPUT','--overwrite': True})
        
    # stats_pendiente = processing.run("native:zonalstatisticsfb", {'INPUT': stats_altitud['OUTPUT'],'INPUT_RASTER': pendiente['OUTPUT'],
    #     'RASTER_BAND': 1,'COLUMN_PREFIX': 'Pendiente_','STATISTICS': [2],'OUTPUT': salida,'--overwrite': True})
    
    print('Estadísticas de zona pendiente, realizada')
        
    ##
    ################ Parametros TABLA 1 Karalis et al (2014)
    
    ##
    # Perimetro-->km
    perimetro = processing.run("native:fieldcalculator", {'INPUT': stats_pendiente['OUTPUT'],'FIELD_NAME': 'Perimetro','FIELD_TYPE': 0,
        'FORMULA': '$perimeter','OUTPUT': 'TEMPORARY_OUTPUT','--overwrite': True})
    print('Cálculo de perímetro, realizado')
    
    # Area-->km2
    area_resul = processing.run("native:fieldcalculator", {'INPUT': perimetro['OUTPUT'],'FIELD_NAME': 'Area','FIELD_TYPE': 0,
        'FORMULA': '$area / 1e6','OUTPUT': 'TEMPORARY_OUTPUT','--overwrite': True})
    print('Cálculo de área, realizado')
    
    ##
    # Factor de compresion-->adimensional
    compresion = processing.run("native:fieldcalculator", {'INPUT': area_resul['OUTPUT'],'FIELD_NAME': 'Compactness_factor',
        'FIELD_TYPE': 0,'FORMULA': 'Perimetro / (2 * sqrt(pi() * Area))','OUTPUT': 'TEMPORARY_OUTPUT','--overwrite': True})
    print('Cálculo de factor de compresión, realizado')
    
    ##
    # Relieve-->m
    relieve = processing.run("native:fieldcalculator", {'INPUT': compresion['OUTPUT'],'FIELD_NAME': 'Relief','FIELD_TYPE': 0,
        'FORMULA': '(Altura_max) - (Altura_min)','OUTPUT': 'TEMPORARY_OUTPUT','--overwrite': True})
    print('Cálculo de relieve, realizado')
     ##
     
    # Circularidad-->adimensional
    circularidad = processing.run("native:fieldcalculator", {'INPUT': relieve['OUTPUT'],'FIELD_NAME': 'Circularity','FIELD_TYPE': 0,
        'FORMULA': '(4 * pi() * Area) / (Perimetro ^ 2)','OUTPUT': 'TEMPORARY_OUTPUT','--overwrite': True})
    print('Cálculo de circularidad, realizado')
        
    # Rugosidad de Melton-->adimensional
    # melton = processing.run("native:fieldcalculator", {
    #    'INPUT': circularidad['OUTPUT'],'FIELD_NAME': 'Meltons_ruggedness','FIELD_TYPE': 0,'FORMULA': 'Relieve * (Area ^ -0.5)',
    #    'OUTPUT': 'TEMPORARY_OUTPUT','--overwrite': True})
        
    melton = processing.run("native:fieldcalculator", {'INPUT': circularidad['OUTPUT'],'FIELD_NAME': 'Meltons_ruggedness','FIELD_TYPE': 0,'FORMULA': 'Relief * (Area ^ -0.5)',
        'OUTPUT': salida,'--overwrite': True})    
        
    print('Cálculo de Rugosidad de Melton, realizado')
    
    print('Cuenca index, finalizada correctamente')
