class TroopsHelper {
  static TROOPS = {
    PIKEMAN: 'PIKEMAN',
    SWORDFISH: 'SWORDFISH',
    AXEMAN: 'AXEMAN',
    SCOUT: 'SCOUT',
    LC: 'LC',
    HC: 'HC',
    BATTERING_RAM: 'BATTERING_RAM',
    CATAPULT: 'CATAPULT',
    KNIGHT: 'KNIGHT',
    NOBLEMAN: 'NOBLEMAN',
  }

  static TROOPS_TRANSLATIONS = {
    [TroopsHelper.TROOPS.PIKEMAN]: 'Pikinier',
    [TroopsHelper.TROOPS.SWORDFISH]: 'Miecznik',
    [TroopsHelper.TROOPS.AXEMAN]: 'Topornik',
    [TroopsHelper.TROOPS.SCOUT]: 'Zwiadowca',
    [TroopsHelper.TROOPS.LC]: 'Lekka kawaleria',
    [TroopsHelper.TROOPS.HC]: 'Ciężka kawaleria',
    [TroopsHelper.TROOPS.BATTERING_RAM]: 'Taran',
    [TroopsHelper.TROOPS.CATAPULT]: 'Katapulta',
    [TroopsHelper.TROOPS.KNIGHT]: 'Rycerz',
    [TroopsHelper.TROOPS.NOBLEMAN]: 'Szlachcic'
  }
  static UNIT_MARCH_TIME_MIN = {
    [TroopsHelper.TROOPS.PIKEMAN]: 18,
    [TroopsHelper.TROOPS.SWORDFISH]: 22,
    [TroopsHelper.TROOPS.AXEMAN]: 18,
    [TroopsHelper.TROOPS.SCOUT]: 9,
    [TroopsHelper.TROOPS.LC]: 10,
    [TroopsHelper.TROOPS.HC]: 11,
    [TroopsHelper.TROOPS.BATTERING_RAM]: 30,
    [TroopsHelper.TROOPS.CATAPULT]: 30,
    [TroopsHelper.TROOPS.KNIGHT]: 10,
    [TroopsHelper.TROOPS.NOBLEMAN]: 35
  }

  static TROOPS_MARCH_STATUS = {
    MARCH_NEGATIVE: -1,
    MARCH_POSITIVE: 1
  }

  static getStatusTranslation = (status) => {
    switch (status) {
      case TroopsHelper.TROOPS_MARCH_STATUS.MARCH_POSITIVE:
        return 'Możliwe w ataku'
      case TroopsHelper.TROOPS_MARCH_STATUS.MARCH_NEGATIVE:
        return 'Nie możliwe w ataku'
      default:
        return '';
    }
  }

}

export default TroopsHelper;