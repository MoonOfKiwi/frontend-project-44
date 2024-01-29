#!/usr/bin/env node
import { getRules, getInfoForRound } from '../src/games/even.js';
import startGame from '../src/index.js';

startGame(getRules(), getInfoForRound);
