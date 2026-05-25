// ─── CONSTANTES E DADOS ESTÁTICOS ────────────────────────────────
var TAM  = 42;
var COLS = 10;
var ROWS = 10;
var CICLO_MS = 2200;

var COR = {
    terra: 0x1a3a1a, herva: 0x22c55e, semente: 0x451a03,
    broto: 0x65a30d, crescendo: 0x84cc16, maduro: 0xa3e635,
    colhivel: 0xfacc15, bloqueado: 0x1e293b, loja: 0x164e63, regado: 0x0ea5e9
};

var CULTURAS = {
    girassol: { emoji: '🌻', nome: 'Girassol', ganho: 65,  custoPlantio: 18,  extraCiclo: 0, fruto: 0xf97316 },
    milho:    { emoji: '🌽', nome: 'Milho',    ganho: 110, custoPlantio: 32,  extraCiclo: 0, fruto: 0xfde047 },
    morango:  { emoji: '🍓', nome: 'Morango',  ganho: 45,  custoPlantio: 12,  extraCiclo: 1, fruto: 0xef4444 },
    lavanda:  { emoji: '💜', nome: 'Lavanda',  ganho: 320, custoPlantio: 95,  extraCiclo: 0, fruto: 0xa78bfa, requerEstufa: true }
};

var ORDEM_SEMENTES_BASE = ['girassol', 'milho', 'morango'];
