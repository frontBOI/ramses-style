new Map([
    ['Enseigne', '^[0-9A-Z]{2}[0-9A-Z]{6}$'],
    ['ModeCol', '^(CCC|CDR|CDS|REL)$'],
    ['ModeLiv', '^(LCC|LD1|LDS|24R|ESP|DRI)$'],
    ['NDossier', '^(|[0-9A-Z_ -]{0,15})$'],
    ['NClient', '^(|[0-9A-Z]{0,9})$'],
    ['Expe_Langage', '^[A-Z]{2}$'],
    ['Expe_Ad1', '^.{2,32}$'],
    ['Expe_Ad2', '^.{0,32}$'],
    ['Expe_Ad3', '^.{2,32}$'],
    ['Expe_Ad4', '^.{0,32}$'],
    ['Expe_Ville', "^[A-Z_\\-' ]{2,26}$"],
    ['Expe_CP', '^[0-9]{5}$'],
    ['Expe_Pays', '^[A-Z]{2}$'],
    ['Expe_Tel1', '^((00|\\+)33|0)[0-9][0-9]{8}$'],
    ['Expe_Tel2', '^((00|\\+)33|0)[0-9][0-9]{8}$'],
    ['Expe_Mail', '^[\\w\\-\\.\\@_]{7,70}$'],
    ['Dest_Langage', '^[A-Z]{2}$'],
    ['Dest_Ad1', '^.{2,32}$'],
    ['Dest_Ad2', '^.{0,32}$'],
    ['Dest_Ad3', '^.{2,32}$'],
    ['Dest_Ad4', '^.{0,32}$'],
    ['Dest_Ville', "^[0-9A-Z_\\-'., /]{0,32}$"],
    ['Dest_CP', '^[0-9]{5}$'],
    ['Dest_Pays', '^[A-Z]{2}$'],
    ['Dest_Tel1', '^((00|\\+)33|0)[0-9][0-9]{8}$'],
    ['Dest_Tel2', '^((00|\\+)33|0)[0-9][0-9]{8}$'],
    ['Dest_Mail', '^[\\w\\-\\.\\@_]{7,70}$'],
    ['Poids', '^[0-9]{3,7}$'],
    ['Longueur', '^[0-9]{0,3}$'],
    ['Taille', '^{0}$'],
    ['NbColis', '^[0-9]{1,2}$'],
    ['CRT_Valeur', '^[0-9]{1,7}$'],
    ['CRT_Devise', '^(|EUR)$'],
    ['EXP_Valeur', '^[0-9]{0,7}$'],
    ['EXP_Devise', '^(|EUR)$'],
    ['COL_Rel_Pays', '^[A-Z]{2}$'],
    ['COL_Rel', '^(|[0-9]{6})$'],
    ['LIV_Rel_Pays', '^[A-Z]{2}$'],
    ['LIV_Rel', '^(|[0-9]{6})$'],
    ['TAvisage', '^(|O|N)$'],
    ['TReprise', '^(|O|N)$'],
    ['Montage', '^(|[0-9]{1,3})$'],
    ['TRDV', '^(|O|N)$'],
    ['Assurance', '^(|[0-9A-Z]{1})$'],
    ['Instructions', "^[0-9A-Z_\\-'., /]{0,31}"],
    ['Texte', "^([^<>&']{3,30})(\\(cr\\)[^<>&']{0,30})"],
])