#!/usr/bin/env node
import { Rules, getInfoForRound } from '../src/games/even.js';
import startGame from '../src/index.js';

startGame(Rules, getInfoForRound);
