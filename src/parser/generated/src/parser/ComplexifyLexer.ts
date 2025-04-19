// Generated from src/parser/Complexify.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class ComplexifyLexer extends Lexer {
	public static readonly NUMBER = 1;
	public static readonly CHAR = 2;
	public static readonly ESCAPE = 3;
	public static readonly PLUS = 4;
	public static readonly MINUS = 5;
	public static readonly TIMES = 6;
	public static readonly DIVIDE = 7;
	public static readonly FRAC = 8;
	public static readonly POW = 9;
	public static readonly SQRT = 10;
	public static readonly LEFT = 11;
	public static readonly RIGHT = 12;
	public static readonly LEFT_BRACE = 13;
	public static readonly RIGHT_BRACE = 14;
	public static readonly COMA = 15;
	public static readonly SEMICOLON = 16;
	public static readonly EQUALS = 17;
	public static readonly OPERATORNAME = 18;
	public static readonly PLOTTED_FUNC = 19;
	public static readonly I = 20;
	public static readonly E = 21;
	public static readonly PI = 22;
	public static readonly SIN = 23;
	public static readonly COS = 24;
	public static readonly TAN = 25;
	public static readonly COT = 26;
	public static readonly SEC = 27;
	public static readonly CSC = 28;
	public static readonly SINH = 29;
	public static readonly COSH = 30;
	public static readonly TANH = 31;
	public static readonly LOG = 32;
	public static readonly LN = 33;
	public static readonly RE = 34;
	public static readonly IM = 35;
	public static readonly CIS = 36;
	public static readonly WS = 37;
	public static readonly LATEX_WS = 38;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"NUMBER", "CHAR", "ESCAPE", "PLUS", "MINUS", "TIMES", "DIVIDE", "FRAC", 
		"POW", "SQRT", "LEFT", "RIGHT", "LEFT_BRACE", "RIGHT_BRACE", "COMA", "SEMICOLON", 
		"EQUALS", "OPERATORNAME", "PLOTTED_FUNC", "I", "E", "PI", "SIN", "COS", 
		"TAN", "COT", "SEC", "CSC", "SINH", "COSH", "TANH", "LOG", "LN", "RE", 
		"IM", "CIS", "WS", "LATEX_WS",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'\\'", "'+'", "'-'", undefined, "'/'", 
		undefined, "'^'", undefined, undefined, undefined, "'{'", "'}'", "','", 
		"';'", "'='", undefined, "'@'", "'i'", "'e'", undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "'cis'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "NUMBER", "CHAR", "ESCAPE", "PLUS", "MINUS", "TIMES", "DIVIDE", 
		"FRAC", "POW", "SQRT", "LEFT", "RIGHT", "LEFT_BRACE", "RIGHT_BRACE", "COMA", 
		"SEMICOLON", "EQUALS", "OPERATORNAME", "PLOTTED_FUNC", "I", "E", "PI", 
		"SIN", "COS", "TAN", "COT", "SEC", "CSC", "SINH", "COSH", "TANH", "LOG", 
		"LN", "RE", "IM", "CIS", "WS", "LATEX_WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ComplexifyLexer._LITERAL_NAMES, ComplexifyLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ComplexifyLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(ComplexifyLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "Complexify.g4"; }

	// @Override
	public get ruleNames(): string[] { return ComplexifyLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return ComplexifyLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return ComplexifyLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return ComplexifyLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02(\u0103\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
		"\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x03\x02\x06\x02Q\n\x02\r" +
		"\x02\x0E\x02R\x03\x02\x03\x02\x05\x02W\n\x02\x05\x02Y\n\x02\x03\x03\x03" +
		"\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t" +
		"\x03\t\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\x81\n\f\x03\r\x03\r\x03\r\x03\r" +
		"\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\x8C\n\r\x03\x0E\x03\x0E\x03\x0F\x03" +
		"\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03" +
		"\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03" +
		"\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03\x16\x03\x16\x03" +
		"\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03" +
		"\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03" +
		"\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03" +
		"\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03" +
		"\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03" +
		"\x1F\x03 \x03 \x03 \x03 \x03 \x03 \x03!\x03!\x03!\x03!\x03!\x03\"\x03" +
		"\"\x03\"\x03\"\x03#\x03#\x03#\x03#\x03$\x03$\x03$\x03$\x03%\x03%\x03%" +
		"\x03%\x03&\x06&\xF6\n&\r&\x0E&\xF7\x03&\x03&\x03\'\x03\'\x06\'\xFE\n\'" +
		"\r\'\x0E\'\xFF\x03\'\x03\'\x02\x02\x02(\x03\x02\x03\x05\x02\x04\x07\x02" +
		"\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02" +
		"\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12" +
		"#\x02\x13%\x02\x14\'\x02\x15)\x02\x16+\x02\x17-\x02\x18/\x02\x191\x02" +
		"\x1A3\x02\x1B5\x02\x1C7\x02\x1D9\x02\x1E;\x02\x1F=\x02 ?\x02!A\x02\"C" +
		"\x02#E\x02$G\x02%I\x02&K\x02\'M\x02(\x03\x02\x04\b\x02CFHJL\\cfhjl|\x05" +
		"\x02\v\f\x0E\x0F\"\"\x02\u0109\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02" +
		"\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02" +
		"\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02" +
		"\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02" +
		"\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02" +
		"\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02\x02\x02" +
		"\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x02)\x03\x02\x02\x02\x02+" +
		"\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03\x02\x02\x02\x021\x03\x02" +
		"\x02\x02\x023\x03\x02\x02\x02\x025\x03\x02\x02\x02\x027\x03\x02\x02\x02" +
		"\x029\x03\x02\x02\x02\x02;\x03\x02\x02\x02\x02=\x03\x02\x02\x02\x02?\x03" +
		"\x02\x02\x02\x02A\x03\x02\x02\x02\x02C\x03\x02\x02\x02\x02E\x03\x02\x02" +
		"\x02\x02G\x03\x02\x02\x02\x02I\x03\x02\x02\x02\x02K\x03\x02\x02\x02\x02" +
		"M\x03\x02\x02\x02\x03P\x03\x02\x02\x02\x05Z\x03\x02\x02\x02\x07\\\x03" +
		"\x02\x02\x02\t^\x03\x02\x02\x02\v`\x03\x02\x02\x02\rb\x03\x02\x02\x02" +
		"\x0Fh\x03\x02\x02\x02\x11j\x03\x02\x02\x02\x13p\x03\x02\x02\x02\x15r\x03" +
		"\x02\x02\x02\x17\x80\x03\x02\x02\x02\x19\x8B\x03\x02\x02\x02\x1B\x8D\x03" +
		"\x02\x02\x02\x1D\x8F\x03\x02\x02\x02\x1F\x91\x03\x02\x02\x02!\x93\x03" +
		"\x02\x02\x02#\x95\x03\x02\x02\x02%\x97\x03\x02\x02\x02\'\xA5\x03\x02\x02" +
		"\x02)\xA7\x03\x02\x02\x02+\xA9\x03\x02\x02\x02-\xAB\x03\x02\x02\x02/\xAF" +
		"\x03\x02\x02\x021\xB4\x03\x02\x02\x023\xB9\x03\x02\x02\x025\xBE\x03\x02" +
		"\x02\x027\xC3\x03\x02\x02\x029\xC8\x03\x02\x02\x02;\xCD\x03\x02\x02\x02" +
		"=\xD3\x03\x02\x02\x02?\xD9\x03\x02\x02\x02A\xDF\x03\x02\x02\x02C\xE4\x03" +
		"\x02\x02\x02E\xE8\x03\x02\x02\x02G\xEC\x03\x02\x02\x02I\xF0\x03\x02\x02" +
		"\x02K\xF5\x03\x02\x02\x02M\xFD\x03\x02\x02\x02OQ\x042;\x02PO\x03\x02\x02" +
		"\x02QR\x03\x02\x02\x02RP\x03\x02\x02\x02RS\x03\x02\x02\x02SX\x03\x02\x02" +
		"\x02TV\x070\x02\x02UW\x042;\x02VU\x03\x02\x02\x02VW\x03\x02\x02\x02WY" +
		"\x03\x02\x02\x02XT\x03\x02\x02\x02XY\x03\x02\x02\x02Y\x04\x03\x02\x02" +
		"\x02Z[\t\x02\x02\x02[\x06\x03\x02\x02\x02\\]\x07^\x02\x02]\b\x03\x02\x02" +
		"\x02^_\x07-\x02\x02_\n\x03\x02\x02\x02`a\x07/\x02\x02a\f\x03\x02\x02\x02" +
		"bc\x05\x07\x04\x02cd\x07e\x02\x02de\x07f\x02\x02ef\x07q\x02\x02fg\x07" +
		"v\x02\x02g\x0E\x03\x02\x02\x02hi\x071\x02\x02i\x10\x03\x02\x02\x02jk\x05" +
		"\x07\x04\x02kl\x07h\x02\x02lm\x07t\x02\x02mn\x07c\x02\x02no\x07e\x02\x02" +
		"o\x12\x03\x02\x02\x02pq\x07`\x02\x02q\x14\x03\x02\x02\x02rs\x05\x07\x04" +
		"\x02st\x07u\x02\x02tu\x07s\x02\x02uv\x07t\x02\x02vw\x07v\x02\x02w\x16" +
		"\x03\x02\x02\x02x\x81\x07*\x02\x02yz\x05\x07\x04\x02z{\x07n\x02\x02{|" +
		"\x07g\x02\x02|}\x07h\x02\x02}~\x07v\x02\x02~\x7F\x07*\x02\x02\x7F\x81" +
		"\x03\x02\x02\x02\x80x\x03\x02\x02\x02\x80y\x03\x02\x02\x02\x81\x18\x03" +
		"\x02\x02\x02\x82\x8C\x07+\x02\x02\x83\x84\x05\x07\x04\x02\x84\x85\x07" +
		"t\x02\x02\x85\x86\x07k\x02\x02\x86\x87\x07i\x02\x02\x87\x88\x07j\x02\x02" +
		"\x88\x89\x07v\x02\x02\x89\x8A\x07+\x02\x02\x8A\x8C\x03\x02\x02\x02\x8B" +
		"\x82\x03\x02\x02\x02\x8B\x83\x03\x02\x02\x02\x8C\x1A\x03\x02\x02\x02\x8D" +
		"\x8E\x07}\x02\x02\x8E\x1C\x03\x02\x02\x02\x8F\x90\x07\x7F\x02\x02\x90" +
		"\x1E\x03\x02\x02\x02\x91\x92\x07.\x02\x02\x92 \x03\x02\x02\x02\x93\x94" +
		"\x07=\x02\x02\x94\"\x03\x02\x02\x02\x95\x96\x07?\x02\x02\x96$\x03\x02" +
		"\x02\x02\x97\x98\x05\x07\x04\x02\x98\x99\x07q\x02\x02\x99\x9A\x07r\x02" +
		"\x02\x9A\x9B\x07g\x02\x02\x9B\x9C\x07t\x02\x02\x9C\x9D\x07c\x02\x02\x9D" +
		"\x9E\x07v\x02\x02\x9E\x9F\x07q\x02\x02\x9F\xA0\x07t\x02\x02\xA0\xA1\x07" +
		"p\x02\x02\xA1\xA2\x07c\x02\x02\xA2\xA3\x07o\x02\x02\xA3\xA4\x07g\x02\x02" +
		"\xA4&\x03\x02\x02\x02\xA5\xA6\x07B\x02\x02\xA6(\x03\x02\x02\x02\xA7\xA8" +
		"\x07k\x02\x02\xA8*\x03\x02\x02\x02\xA9\xAA\x07g\x02\x02\xAA,\x03\x02\x02" +
		"\x02\xAB\xAC\x05\x07\x04\x02\xAC\xAD\x07r\x02\x02\xAD\xAE\x07k\x02\x02" +
		"\xAE.\x03\x02\x02\x02\xAF\xB0\x05\x07\x04\x02\xB0\xB1\x07u\x02\x02\xB1" +
		"\xB2\x07k\x02\x02\xB2\xB3\x07p\x02\x02\xB30\x03\x02\x02\x02\xB4\xB5\x05" +
		"\x07\x04\x02\xB5\xB6\x07e\x02\x02\xB6\xB7\x07q\x02\x02\xB7\xB8\x07u\x02" +
		"\x02\xB82\x03\x02\x02\x02\xB9\xBA\x05\x07\x04\x02\xBA\xBB\x07v\x02\x02" +
		"\xBB\xBC\x07c\x02\x02\xBC\xBD\x07p\x02\x02\xBD4\x03\x02\x02\x02\xBE\xBF" +
		"\x05\x07\x04\x02\xBF\xC0\x07e\x02\x02\xC0\xC1\x07q\x02\x02\xC1\xC2\x07" +
		"v\x02\x02\xC26\x03\x02\x02\x02\xC3\xC4\x05\x07\x04\x02\xC4\xC5\x07u\x02" +
		"\x02\xC5\xC6\x07g\x02\x02\xC6\xC7\x07e\x02\x02\xC78\x03\x02\x02\x02\xC8" +
		"\xC9\x05\x07\x04\x02\xC9\xCA\x07e\x02\x02\xCA\xCB\x07u\x02\x02\xCB\xCC" +
		"\x07e\x02\x02\xCC:\x03\x02\x02\x02\xCD\xCE\x05\x07\x04\x02\xCE\xCF\x07" +
		"u\x02\x02\xCF\xD0\x07k\x02\x02\xD0\xD1\x07p\x02\x02\xD1\xD2\x07j\x02\x02" +
		"\xD2<\x03\x02\x02\x02\xD3\xD4\x05\x07\x04\x02\xD4\xD5\x07e\x02\x02\xD5" +
		"\xD6\x07q\x02\x02\xD6\xD7\x07u\x02\x02\xD7\xD8\x07j\x02\x02\xD8>\x03\x02" +
		"\x02\x02\xD9\xDA\x05\x07\x04\x02\xDA\xDB\x07v\x02\x02\xDB\xDC\x07c\x02" +
		"\x02\xDC\xDD\x07p\x02\x02\xDD\xDE\x07j\x02\x02\xDE@\x03\x02\x02\x02\xDF" +
		"\xE0\x05\x07\x04\x02\xE0\xE1\x07n\x02\x02\xE1\xE2\x07q\x02\x02\xE2\xE3" +
		"\x07i\x02\x02\xE3B\x03\x02\x02\x02\xE4\xE5\x05\x07\x04\x02\xE5\xE6\x07" +
		"n\x02\x02\xE6\xE7\x07p\x02\x02\xE7D\x03\x02\x02\x02\xE8\xE9\x05\x07\x04" +
		"\x02\xE9\xEA\x07T\x02\x02\xEA\xEB\x07g\x02\x02\xEBF\x03\x02\x02\x02\xEC" +
		"\xED\x05\x07\x04\x02\xED\xEE\x07K\x02\x02\xEE\xEF\x07O\x02\x02\xEFH\x03" +
		"\x02\x02\x02\xF0\xF1\x07e\x02\x02\xF1\xF2\x07k\x02\x02\xF2\xF3\x07u\x02" +
		"\x02\xF3J\x03\x02\x02\x02\xF4\xF6\t\x03\x02\x02\xF5\xF4\x03\x02\x02\x02" +
		"\xF6\xF7\x03\x02\x02\x02\xF7\xF5\x03\x02\x02\x02\xF7\xF8\x03\x02\x02\x02" +
		"\xF8\xF9\x03\x02\x02\x02\xF9\xFA\b&\x02\x02\xFAL\x03\x02\x02\x02\xFB\xFC" +
		"\x07^\x02\x02\xFC\xFE\x07\"\x02\x02\xFD\xFB\x03\x02\x02\x02\xFE\xFF\x03" +
		"\x02\x02\x02\xFF\xFD\x03\x02\x02\x02\xFF\u0100\x03\x02\x02\x02\u0100\u0101" +
		"\x03\x02\x02\x02\u0101\u0102\b\'\x02\x02\u0102N\x03\x02\x02\x02\n\x02" +
		"RVX\x80\x8B\xF7\xFF\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ComplexifyLexer.__ATN) {
			ComplexifyLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ComplexifyLexer._serializedATN));
		}

		return ComplexifyLexer.__ATN;
	}

}

