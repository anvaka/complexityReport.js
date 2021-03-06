/*globals exports */

'use strict';

exports.format = format;

function format (reports) {
    var formatted = '# Complexity report ~ ' + (new Date()).toLocaleDateString() + '\n\n', i;

    for (i = 0; i < reports.length; i += 1) {
        formatted += formatModule(reports[i]) + '\n\n';
    }

    return formatted;
}

function formatModule (report) {
    return [
        '##',
        report.module,
        '\n\n',
        '* Maintainability index: ', report.maintainability, '\n',
        '* Aggregate cyclomatic complexity: ', report.aggregate.complexity.cyclomatic,
        formatFunctions(report.functions)
    ].join('');
}

function formatFunctions (report) {
    var formatted = '', i;

    for (i = 0; i < report.length; i += 1) {
        formatted += '\n' + formatFunction(report[i]);
    }

    return formatted;
}

function formatFunction (report) {
    return [
        '    * Function: **', report.name.replace('<', '&lt;'), '**\n',
        '        * Line No.: ', report.line, '\n',
        '        * Physical SLOC: ', report.complexity.sloc.physical, '\n',
        '        * Logical SLOC: ', report.complexity.sloc.logical, '\n',
        '        * Cyclomatic complexity: ', report.complexity.cyclomatic, '\n',
        '        * Halstead difficulty: ', report.complexity.halstead.difficulty, '\n',
        '        * Halstead volume: ', report.complexity.halstead.volume, '\n',
        '        * Halstead effort: ', report.complexity.halstead.effort
    ].join('');
}

