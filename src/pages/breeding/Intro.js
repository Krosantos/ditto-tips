import React from 'react';
import Anchor from '@shared/Anchor';
import { section } from './breeding.scss';

/* eslint-disable react/jsx-no-literals, react/jsx-one-expression-per-line, react/jsx-max-depth */
const Intro = () => (
	<div className={section}>
		<Anchor id="intro" />
		<h1>Breeding</h1>
		<p>
            Breeding is the art of getting a bunch of positive qualities (strong <a href="/data#i-vs">IVs</a>, good <a href="/data#nature">natures</a>, strong <a href="/data#abilities">abilities</a>) from a disparate set of pokémon onto a single, powerful pokémon. The only way, short of incredible luck, of aqcuiring an optimized pokémon, is to breed for one.
		</p>
		<p>
            Breeding covers a large assortment of small mechanics. This guide will cover:
		</p>
		<ul>
			<li>The <a href="#basic-mechanics">basic mechanics</a> of acquiring and hatching eggs.</li>
			<li>Which pokémon are genetically <a href="#compatibility">compatible</a>.</li>
			<li>Which traits are <a href="#inheritance">heritable</a>, and how held items affect this.</li>
			<li>What <a href="#i-vs">IVs</a> are, and why they matter.</li>
			<li>The freakish, gender-bending magic of <a href="#ditto">Ditto</a>.</li>
			<li><a href="#shiny">Shininess</a>, and the factors which influence it.</li>
			<li>Some long-winded, needlessly contrived <a href="#examples">examples</a>, in the hope they help illustrate things.</li>
		</ul>
	</div>
);

export default Intro;
