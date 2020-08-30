#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sat Aug 29 13:28:04 2020

@author: trevorceniviva
"""

cards = ["ace-spades","ace-clubs","ace-hearts","ace-diamonds",
    "two-spades","two-clubs","two-hearts","two-diamonds",
    "three-spades","three-clubs","three-hearts","three-diamonds",
    "four-spades","four-clubs","four-hearts","four-diamonds",
    "five-spades","five-clubs","five-hearts","five-diamonds",
    "six-spades","six-clubs","six-hearts","six-diamonds",
    "seven-spades","seven-clubs","seven-hearts","seven-diamonds",
    "eight-spades","eight-clubs","eight-hearts","eight-diamonds",
    "nine-spades","nine-clubs","nine-hearts","nine-diamonds",
    "ten-spades","ten-clubs","ten-hearts","ten-diamonds",
    "jack-spades","jack-clubs","jack-hearts","jack-diamonds",
    "queen-spades","queen-clubs","queen-hearts","queen-diamonds",
    "king-spades","king-clubs","king-hearts","king-diamonds"]

for x in cards:
    print('''.''' + x + ''' {
    background-image: url("PNG/''' + x + '''.png");
    } ''')