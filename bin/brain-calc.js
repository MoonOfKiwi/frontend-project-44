#!/usr/bin/env node
import { getRules, getInfoForRound } from '../src/games/calc.js';
import startGame from '../src/index.js';

startGame(getRules(), getInfoForRound);
