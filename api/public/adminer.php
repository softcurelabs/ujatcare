<?php
/** Adminer - Compact database management
* @link https://www.adminer.org/
*
* @author Jakub Vrana, https://www.vrana.cz/
* @copyright 2007 Jakub Vrana
* @license https://www.apache.org/licenses/LICENSE-2.0 Apache License, Version 2.0
* @license https://www.gnu.org/licenses/gpl-2.0.html GNU General Public License, version 2 (one or other)
*
* @version 4.8.1
*/ function adminer_errors($cc, $ec)
{
    return (bool) preg_match('~^(Trying to access array offset on( value of type)? null|Undefined array key)~', $ec);
}error_reporting(6135);
set_error_handler('adminer_errors', E_WARNING);
$wc = ! preg_match('~^(unsafe_raw)?$~', ini_get('filter.default'));
if ($wc || ini_get('filter.default_flags')) {
    foreach (['_GET', '_POST', '_COOKIE', '_SERVER'] as $X) {
        $ch = filter_input_array(constant("INPUT$X"), FILTER_UNSAFE_RAW);
        if ($ch) {
            $$X = $ch;
        }
    }
}if (function_exists('mb_internal_encoding')) {
    mb_internal_encoding('8bit');
}function connection()
{
    global $e;

    return $e;
}function adminer()
{
    global $b;

    return $b;
}function version()
{
    global $ga;

    return $ga;
}function idf_unescape($Wc)
{
    if (! preg_match('~^[`\'"]~', $Wc)) {
        return $Wc;
    }$td = substr($Wc, -1);

    return str_replace($td.$td, $td, substr($Wc, 1, -1));
}function escape_string($X)
{
    return substr(q($X), 1, -1);
}function number($X)
{
    return preg_replace('~[^0-9]+~', '', $X);
}function number_type()
{
    return '((?<!o)int(?!er)|numeric|real|float|double|decimal|money)';
}function remove_slashes($hf, $wc = false)
{
    if (function_exists('get_magic_quotes_gpc') && get_magic_quotes_gpc()) {
        while ([$z, $X] = each($hf)) {
            foreach ($X as $md => $W) {
                unset($hf[$z][$md]);
                if (is_array($W)) {
                    $hf[$z][stripslashes($md)] = $W;
                    $hf[] = &$hf[$z][stripslashes($md)];
                } else {
                    $hf[$z][stripslashes($md)] = ($wc ? $W : stripslashes($W));
                }
            }
        }
    }
}function bracket_escape($Wc, $_a = false)
{
    static $Pg = [':' => ':1', ']' => ':2', '[' => ':3', '"' => ':4'];

    return strtr($Wc, ($_a ? array_flip($Pg) : $Pg));
}function min_version($rh, $Fd = '', $f = null)
{
    global $e;
    if (! $f) {
        $f = $e;
    }$Pf = $f->server_info;
    if ($Fd && preg_match('~([\d.]+)-MariaDB~', $Pf, $C)) {
        $Pf = $C[1];
        $rh = $Fd;
    }

    return version_compare($Pf, $rh) >= 0;
}function charset($e)
{
    return min_version('5.5.3', 0, $e) ? 'utf8mb4' : 'utf8';
}function script($Yf, $Og = "\n")
{
    return '<script'.nonce().">$Yf</script>$Og";
}function script_src($hh)
{
    return "<script src='".h($hh)."'".nonce()."></script>\n";
}function nonce()
{
    return ' nonce="'.get_nonce().'"';
}function target_blank()
{
    return ' target="_blank" rel="noreferrer noopener"';
}function h($ig)
{
    return str_replace("\0", '&#0;', htmlspecialchars($ig, ENT_QUOTES, 'utf-8'));
}function nl_br($ig)
{
    return str_replace("\n", '<br>', $ig);
}function checkbox($E, $Y, $Na, $qd = '', $qe = '', $Ra = '', $rd = '')
{
    $K = "<input type='checkbox' name='$E' value='".h($Y)."'".($Na ? ' checked' : '').($rd ? " aria-labelledby='$rd'" : '').'>'.($qe ? script("qsl('input').onclick = function () { $qe };", '') : '');

    return $qd != '' || $Ra ? '<label'.($Ra ? " class='$Ra'" : '').">$K".h($qd).'</label>' : $K;
}function optionlist($ue, $Kf = null, $lh = false)
{
    $K = '';
    foreach ($ue as $md => $W) {
        $ve = [$md => $W];
        if (is_array($W)) {
            $K .= '<optgroup label="'.h($md).'">';
            $ve = $W;
        }foreach ($ve as $z => $X) {
            $K .= '<option'.($lh || is_string($z) ? ' value="'.h($z).'"' : '').(($lh || is_string($z) ? (string) $z : $X) === $Kf ? ' selected' : '').'>'.h($X);
        }if (is_array($W)) {
            $K .= '</optgroup>';
        }
    }

    return $K;
}function html_select($E, $ue, $Y = '', $pe = true, $rd = '')
{
    if ($pe) {
        return "<select name='".h($E)."'".($rd ? " aria-labelledby='$rd'" : '').'>'.optionlist($ue, $Y).'</select>'.(is_string($pe) ? script("qsl('select').onchange = function () { $pe };", '') : '');
    }$K = '';
    foreach ($ue as $z => $X) {
        $K .= "<label><input type='radio' name='".h($E)."' value='".h($z)."'".($z == $Y ? ' checked' : '').'>'.h($X).'</label>';
    }

    return $K;
}function select_input($wa, $ue, $Y = '', $pe = '', $Ue = '')
{
    $xg = ($ue ? 'select' : 'input');

    return "<$xg$wa".($ue ? "><option value=''>$Ue".optionlist($ue, $Y, true).'</select>' : " size='10' value='".h($Y)."' placeholder='$Ue'>").($pe ? script("qsl('$xg').onchange = $pe;", '') : '');
}function confirm($D = '', $Lf = "qsl('input')")
{
    return script("$Lf.onclick = function () { return confirm('".($D ? js_escape($D) : 'Are you sure?')."'); };", '');
}function print_fieldset($u, $yd, $uh = false)
{
    echo '<fieldset><legend>',"<a href='#fieldset-$u'>$yd</a>",script("qsl('a').onclick = partial(toggle, 'fieldset-$u');", ''),'</legend>',"<div id='fieldset-$u'".($uh ? '' : " class='hidden'").">\n";
}function bold($Ga, $Ra = '')
{
    return $Ga ? " class='active $Ra'" : ($Ra ? " class='$Ra'" : '');
}function odd($K = ' class="odd"')
{
    static $t = 0;
    if (! $K) {
        $t = -1;
    }

    return $t++ % 2 ? $K : '';
}function js_escape($ig)
{
    return addcslashes($ig, "\r\n'\\/");
}function json_row($z, $X = null)
{
    static $xc = true;
    if ($xc) {
        echo '{';
    }if ($z != '') {
        echo ($xc ? '' : ',')."\n\t\"".addcslashes($z, "\r\n\t\"\\/").'": '.($X !== null ? '"'.addcslashes($X, "\r\n\"\\/").'"' : 'null');
        $xc = false;
    } else {
        echo "\n}\n";
        $xc = true;
    }
}function ini_bool($bd)
{
    $X = ini_get($bd);

    return preg_match('~^(on|true|yes)$~i', $X) || (int) $X;
}function sid()
{
    static $K;
    if ($K === null) {
        $K = (SID && ! ($_COOKIE && ini_bool('session.use_cookies')));
    }

    return $K;
}function set_password($qh, $O, $V, $G)
{
    $_SESSION['pwds'][$qh][$O][$V] = ($_COOKIE['adminer_key'] && is_string($G) ? [encrypt_string($G, $_COOKIE['adminer_key'])] : $G);
}function get_password()
{
    $K = get_session('pwds');
    if (is_array($K)) {
        $K = ($_COOKIE['adminer_key'] ? decrypt_string($K[0], $_COOKIE['adminer_key']) : false);
    }

    return $K;
}function q($ig)
{
    global $e;

    return $e->quote($ig);
}function get_vals($I, $c = 0)
{
    global $e;
    $K = [];
    $J = $e->query($I);
    if (is_object($J)) {
        while ($L = $J->fetch_row()) {
            $K[] = $L[$c];
        }
    }

    return $K;
}function get_key_vals($I, $f = null, $Sf = true)
{
    global $e;
    if (! is_object($f)) {
        $f = $e;
    }$K = [];
    $J = $f->query($I);
    if (is_object($J)) {
        while ($L = $J->fetch_row()) {
            if ($Sf) {
                $K[$L[0]] = $L[1];
            } else {
                $K[] = $L[0];
            }
        }
    }

    return $K;
}function get_rows($I, $f = null, $k = "<p class='error'>")
{
    global $e;
    $fb = (is_object($f) ? $f : $e);
    $K = [];
    $J = $fb->query($I);
    if (is_object($J)) {
        while ($L = $J->fetch_assoc()) {
            $K[] = $L;
        }
    } elseif (! $J && ! is_object($f) && $k && defined('PAGE_HEADER')) {
        echo $k.error()."\n";
    }

    return $K;
}function unique_array($L, $w)
{
    foreach ($w as $v) {
        if (preg_match('~PRIMARY|UNIQUE~', $v['type'])) {
            $K = [];
            foreach ($v['columns'] as $z) {
                if (! isset($L[$z])) {
                    continue 2;
                }$K[$z] = $L[$z];
            }

            return $K;
        }
    }
}function escape_key($z)
{
    if (preg_match('(^([\w(]+)('.str_replace('_', '.*', preg_quote(idf_escape('_'))).')([ \w)]+)$)', $z, $C)) {
        return $C[1].idf_escape(idf_unescape($C[2])).$C[3];
    }

    return idf_escape($z);
}function where($Z, $m = [])
{
    global $e,$y;
    $K = [];
    foreach ((array) $Z['where'] as $z => $X) {
        $z = bracket_escape($z, 1);
        $c = escape_key($z);
        $K[] = $c.($y == 'sql' && is_numeric($X) && preg_match('~\.~', $X) ? ' LIKE '.q($X) : ($y == 'mssql' ? ' LIKE '.q(preg_replace('~[_%[]~', '[\0]', $X)) : ' = '.unconvert_field($m[$z], q($X))));
        if ($y == 'sql' && preg_match('~char|text~', $m[$z]['type']) && preg_match('~[^ -@]~', $X)) {
            $K[] = "$c = ".q($X).' COLLATE '.charset($e).'_bin';
        }
    }foreach ((array) $Z['null'] as $z) {
        $K[] = escape_key($z).' IS NULL';
    }

    return implode(' AND ', $K);
}function where_check($X, $m = [])
{
    parse_str($X, $Ma);
    remove_slashes([&$Ma]);

    return where($Ma, $m);
}function where_link($t, $c, $Y, $re = '=')
{
    return "&where%5B$t%5D%5Bcol%5D=".urlencode($c)."&where%5B$t%5D%5Bop%5D=".urlencode(($Y !== null ? $re : 'IS NULL'))."&where%5B$t%5D%5Bval%5D=".urlencode($Y);
}function convert_fields($d, $m, $N = [])
{
    $K = '';
    foreach ($d as $z => $X) {
        if ($N && ! in_array(idf_escape($z), $N)) {
            continue;
        }$ua = convert_field($m[$z]);
        if ($ua) {
            $K .= ", $ua AS ".idf_escape($z);
        }
    }

    return $K;
}function cookie($E, $Y, $Ad = 2592000)
{
    global $ba;

    return header("Set-Cookie: $E=".urlencode($Y).($Ad ? '; expires='.gmdate('D, d M Y H:i:s', time() + $Ad).' GMT' : '').'; path='.preg_replace('~\?.*~', '', $_SERVER['REQUEST_URI']).($ba ? '; secure' : '').'; HttpOnly; SameSite=lax', false);
}function restart_session()
{
    if (! ini_bool('session.use_cookies')) {
        session_start();
    }
}function stop_session($zc = false)
{
    $kh = ini_bool('session.use_cookies');
    if (! $kh || $zc) {
        session_write_close();
        if ($kh && @ini_set('session.use_cookies', false) === false) {
            session_start();
        }
    }
}function &get_session($z)
{
    return $_SESSION[$z][DRIVER][SERVER][$_GET['username']];
}function set_session($z, $X)
{
    $_SESSION[$z][DRIVER][SERVER][$_GET['username']] = $X;
}function auth_url($qh, $O, $V, $i = null)
{
    global $Kb;
    preg_match('~([^?]*)\??(.*)~', remove_from_uri(implode('|', array_keys($Kb)).'|username|'.($i !== null ? 'db|' : '').session_name()), $C);

    return "$C[1]?".(sid() ? SID.'&' : '').($qh != 'server' || $O != '' ? urlencode($qh).'='.urlencode($O).'&' : '').'username='.urlencode($V).($i != '' ? '&db='.urlencode($i) : '').($C[2] ? "&$C[2]" : '');
}function is_ajax()
{
    return $_SERVER['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest';
}function redirect($B, $D = null)
{
    if ($D !== null) {
        restart_session();
        $_SESSION['messages'][preg_replace('~^[^?]*~', '', ($B !== null ? $B : $_SERVER['REQUEST_URI']))][] = $D;
    }if ($B !== null) {
        if ($B == '') {
            $B = '.';
        }header("Location: $B");
        exit;
    }
}function query_redirect($I, $B, $D, $pf = true, $jc = true, $qc = false, $Dg = '')
{
    global $e,$k,$b;
    if ($jc) {
        $eg = microtime(true);
        $qc = ! $e->query($I);
        $Dg = format_time($eg);
    }$ag = '';
    if ($I) {
        $ag = $b->messageQuery($I, $Dg, $qc);
    }if ($qc) {
        $k = error().$ag.script('messagesPrint();');

        return false;
    }if ($pf) {
        redirect($B, $D.$ag);
    }

    return true;
}function queries($I)
{
    global $e;
    static $kf = [];
    static $eg;
    if (! $eg) {
        $eg = microtime(true);
    }if ($I === null) {
        return [implode("\n", $kf), format_time($eg)];
    }$kf[] = (preg_match('~;$~', $I) ? "DELIMITER ;;\n$I;\nDELIMITER " : $I).';';

    return $e->query($I);
}function apply_queries($I, $S, $fc = 'table')
{
    foreach ($S as $Q) {
        if (! queries("$I ".$fc($Q))) {
            return false;
        }
    }

    return true;
}function queries_redirect($B, $D, $pf)
{
    [$kf, $Dg] = queries(null);

    return query_redirect($kf, $B, $D, $pf, false, ! $pf, $Dg);
}function format_time($eg)
{
    return sprintf('%.3f s', max(0, microtime(true) - $eg));
}function relative_uri()
{
    return str_replace(':', '%3a', preg_replace('~^[^?]*/([^?]*)~', '\1', $_SERVER['REQUEST_URI']));
}function remove_from_uri($Ie = '')
{
    return substr(preg_replace("~(?<=[?&])($Ie".(SID ? '' : '|'.session_name()).')=[^&]*&~', '', relative_uri().'&'), 0, -1);
}function pagination($F, $qb)
{
    return ' '.($F == $qb ? $F + 1 : '<a href="'.h(remove_from_uri('page').($F ? "&page=$F".($_GET['next'] ? '&next='.urlencode($_GET['next']) : '') : '')).'">'.($F + 1).'</a>');
}function get_file($z, $yb = false)
{
    $uc = $_FILES[$z];
    if (! $uc) {
        return null;
    }foreach ($uc as $z => $X) {
        $uc[$z] = (array) $X;
    }$K = '';
    foreach ($uc['error'] as $z => $k) {
        if ($k) {
            return $k;
        }$E = $uc['name'][$z];
        $Lg = $uc['tmp_name'][$z];
        $gb = file_get_contents($yb && preg_match('~\.gz$~', $E) ? "compress.zlib://$Lg" : $Lg);
        if ($yb) {
            $eg = substr($gb, 0, 3);
            if (function_exists('iconv') && preg_match("~^\xFE\xFF|^\xFF\xFE~", $eg, $vf)) {
                $gb = iconv('utf-16', 'utf-8', $gb);
            } elseif ($eg == "\xEF\xBB\xBF") {
                $gb = substr($gb, 3);
            }$K .= $gb."\n\n";
        } else {
            $K .= $gb;
        }
    }

    return $K;
}function upload_error($k)
{
    $Ld = ($k == UPLOAD_ERR_INI_SIZE ? ini_get('upload_max_filesize') : 0);

    return $k ? 'Unable to upload a file.'.($Ld ? ' '.sprintf('Maximum allowed file size is %sB.', $Ld) : '') : 'File does not exist.';
}function repeat_pattern($Re, $zd)
{
    return str_repeat("$Re{0,65535}", $zd / 65535)."$Re{0,".($zd % 65535).'}';
}function is_utf8($X)
{
    return preg_match('~~u', $X) && ! preg_match('~[\0-\x8\xB\xC\xE-\x1F]~', $X);
}function shorten_utf8($ig, $zd = 80, $mg = '')
{
    if (! preg_match('(^('.repeat_pattern("[\t\r\n -\x{10FFFF}]", $zd).')($)?)u', $ig, $C)) {
        preg_match('(^('.repeat_pattern("[\t\r\n -~]", $zd).')($)?)', $ig, $C);
    }

    return h($C[1]).$mg.(isset($C[2]) ? '' : '<i>…</i>');
}function format_number($X)
{
    return strtr(number_format($X, 0, '.', ','), preg_split('~~u', '0123456789', -1, PREG_SPLIT_NO_EMPTY));
}function friendly_url($X)
{
    return preg_replace('~[^a-z0-9_]~i', '-', $X);
}function hidden_fields($hf, $Xc = [], $af = '')
{
    $K = false;
    foreach ($hf as $z => $X) {
        if (! in_array($z, $Xc)) {
            if (is_array($X)) {
                hidden_fields($X, [], $z);
            } else {
                $K = true;
                echo '<input type="hidden" name="'.h($af ? $af."[$z]" : $z).'" value="'.h($X).'">';
            }
        }
    }

    return $K;
}function hidden_fields_get()
{
    echo (sid() ? '<input type="hidden" name="'.session_name().'" value="'.h(session_id()).'">' : ''),(SERVER !== null ? '<input type="hidden" name="'.DRIVER.'" value="'.h(SERVER).'">' : ''),'<input type="hidden" name="username" value="'.h($_GET['username']).'">';
}function table_status1($Q, $rc = false)
{
    $K = table_status($Q, $rc);

    return $K ? $K : ['Name' => $Q];
}function column_foreign_keys($Q)
{
    global $b;
    $K = [];
    foreach ($b->foreignKeys($Q) as $n) {
        foreach ($n['source'] as $X) {
            $K[$X][] = $n;
        }
    }

    return $K;
}function enum_input($U, $wa, $l, $Y, $Yb = null)
{
    global $b;
    preg_match_all("~'((?:[^']|'')*)'~", $l['length'], $Gd);
    $K = ($Yb !== null ? "<label><input type='$U'$wa value='$Yb'".((is_array($Y) ? in_array($Yb, $Y) : $Y === 0) ? ' checked' : '').'><i>'.'empty'.'</i></label>' : '');
    foreach ($Gd[1] as $t => $X) {
        $X = stripcslashes(str_replace("''", "'", $X));
        $Na = (is_int($Y) ? $Y == $t + 1 : (is_array($Y) ? in_array($t + 1, $Y) : $Y === $X));
        $K .= " <label><input type='$U'$wa value='".($t + 1)."'".($Na ? ' checked' : '').'>'.h($b->editVal($X, $l)).'</label>';
    }

    return $K;
}function input($l, $Y, $q)
{
    global $Xg,$b,$y;
    $E = h(bracket_escape($l['field']));
    echo "<td class='function'>";
    if (is_array($Y) && ! $q) {
        $ta = [$Y];
        if (version_compare(PHP_VERSION, 5.4) >= 0) {
            $ta[] = JSON_PRETTY_PRINT;
        }$Y = call_user_func_array('json_encode', $ta);
        $q = 'json';
    }$xf = ($y == 'mssql' && $l['auto_increment']);
    if ($xf && ! $_POST['save']) {
        $q = null;
    }$Fc = (isset($_GET['select']) || $xf ? ['orig' => 'original'] : []) + $b->editFunctions($l);
    $wa = " name='fields[$E]'";
    if ($l['type'] == 'enum') {
        echo h($Fc['']).'<td>'.$b->editInput($_GET['edit'], $l, $wa, $Y);
    } else {
        $Nc = (in_array($q, $Fc) || isset($Fc[$q]));
        echo (count($Fc) > 1 ? "<select name='function[$E]'>".optionlist($Fc, $q === null || $Nc ? $q : '').'</select>'.on_help("getTarget(event).value.replace(/^SQL\$/, '')", 1).script("qsl('select').onchange = functionChange;", '') : h(reset($Fc))).'<td>';
        $dd = $b->editInput($_GET['edit'], $l, $wa, $Y);
        if ($dd != '') {
            echo $dd;
        } elseif (preg_match('~bool~', $l['type'])) {
            echo "<input type='hidden'$wa value='0'>"."<input type='checkbox'".(preg_match('~^(1|t|true|y|yes|on)$~i', $Y) ? " checked='checked'" : '')."$wa value='1'>";
        } elseif ($l['type'] == 'set') {
            preg_match_all("~'((?:[^']|'')*)'~", $l['length'], $Gd);
            foreach ($Gd[1] as $t => $X) {
                $X = stripcslashes(str_replace("''", "'", $X));
                $Na = (is_int($Y) ? ($Y >> $t) & 1 : in_array($X, explode(',', $Y), true));
                echo " <label><input type='checkbox' name='fields[$E][$t]' value='".(1 << $t)."'".($Na ? ' checked' : '').'>'.h($b->editVal($X, $l)).'</label>';
            }
        } elseif (preg_match('~blob|bytea|raw|file~', $l['type']) && ini_bool('file_uploads')) {
            echo "<input type='file' name='fields-$E'>";
        } elseif (($Bg = preg_match('~text|lob|memo~i', $l['type'])) || preg_match("~\n~", $Y)) {
            if ($Bg && $y != 'sqlite') {
                $wa .= " cols='50' rows='12'";
            } else {
                $M = min(12, substr_count($Y, "\n") + 1);
                $wa .= " cols='30' rows='$M'".($M == 1 ? " style='height: 1.2em;'" : '');
            }echo "<textarea$wa>".h($Y).'</textarea>';
        } elseif ($q == 'json' || preg_match('~^jsonb?$~', $l['type'])) {
            echo "<textarea$wa cols='50' rows='12' class='jush-js'>".h($Y).'</textarea>';
        } else {
            $Nd = (! preg_match('~int~', $l['type']) && preg_match('~^(\d+)(,(\d+))?$~', $l['length'], $C) ? ((preg_match('~binary~', $l['type']) ? 2 : 1) * $C[1] + ($C[3] ? 1 : 0) + ($C[2] && ! $l['unsigned'] ? 1 : 0)) : ($Xg[$l['type']] ? $Xg[$l['type']] + ($l['unsigned'] ? 0 : 1) : 0));
            if ($y == 'sql' && min_version(5.6) && preg_match('~time~', $l['type'])) {
                $Nd += 7;
            }echo '<input'.((! $Nc || $q === '') && preg_match('~(?<!o)int(?!er)~', $l['type']) && ! preg_match('~\[\]~', $l['full_type']) ? " type='number'" : '')." value='".h($Y)."'".($Nd ? " data-maxlength='$Nd'" : '').(preg_match('~char|binary~', $l['type']) && $Nd > 20 ? " size='40'" : '')."$wa>";
        }echo $b->editHint($_GET['edit'], $l, $Y);
        $xc = 0;
        foreach ($Fc as $z => $X) {
            if ($z === '' || ! $X) {
                break;
            }$xc++;
        }if ($xc) {
            echo script("mixin(qsl('td'), {onchange: partial(skipOriginal, $xc), oninput: function () { this.onchange(); }});");
        }
    }
}function process_input($l)
{
    global $b,$j;
    $Wc = bracket_escape($l['field']);
    $q = $_POST['function'][$Wc];
    $Y = $_POST['fields'][$Wc];
    if ($l['type'] == 'enum') {
        if ($Y == -1) {
            return false;
        }if ($Y == '') {
            return 'NULL';
        }

        return +$Y;
    }if ($l['auto_increment'] && $Y == '') {
        return null;
    }if ($q == 'orig') {
        return preg_match('~^CURRENT_TIMESTAMP~i', $l['on_update']) ? idf_escape($l['field']) : false;
    }if ($q == 'NULL') {
        return 'NULL';
    }if ($l['type'] == 'set') {
        return array_sum((array) $Y);
    }if ($q == 'json') {
        $q = '';
        $Y = json_decode($Y, true);
        if (! is_array($Y)) {
            return false;
        }

        return $Y;
    }if (preg_match('~blob|bytea|raw|file~', $l['type']) && ini_bool('file_uploads')) {
        $uc = get_file("fields-$Wc");
        if (! is_string($uc)) {
            return false;
        }

        return $j->quoteBinary($uc);
    }

    return $b->processInput($l, $Y, $q);
}function fields_from_edit()
{
    global $j;
    $K = [];
    foreach ((array) $_POST['field_keys'] as $z => $X) {
        if ($X != '') {
            $X = bracket_escape($X);
            $_POST['function'][$X] = $_POST['field_funs'][$z];
            $_POST['fields'][$X] = $_POST['field_vals'][$z];
        }
    }foreach ((array) $_POST['fields'] as $z => $X) {
        $E = bracket_escape($z, 1);
        $K[$E] = ['field' => $E, 'privileges' => ['insert' => 1, 'update' => 1], 'null' => 1, 'auto_increment' => ($z == $j->primary)];
    }

    return $K;
}function search_tables()
{
    global $b,$e;
    $_GET['where'][0]['val'] = $_POST['query'];
    $Nf = "<ul>\n";
    foreach (table_status('', true) as $Q => $R) {
        $E = $b->tableName($R);
        if (isset($R['Engine']) && $E != '' && (! $_POST['tables'] || in_array($Q, $_POST['tables']))) {
            $J = $e->query('SELECT'.limit('1 FROM '.table($Q), ' WHERE '.implode(' AND ', $b->selectSearchProcess(fields($Q), [])), 1));
            if (! $J || $J->fetch_row()) {
                $df = "<a href='".h(ME.'select='.urlencode($Q).'&where[0][op]='.urlencode($_GET['where'][0]['op']).'&where[0][val]='.urlencode($_GET['where'][0]['val']))."'>$E</a>";
                echo "$Nf<li>".($J ? $df : "<p class='error'>$df: ".error())."\n";
                $Nf = '';
            }
        }
    }echo ($Nf ? "<p class='message'>".'No tables.' : '</ul>')."\n";
}function dump_headers($Vc, $Ud = false)
{
    global $b;
    $K = $b->dumpHeaders($Vc, $Ud);
    $Fe = $_POST['output'];
    if ($Fe != 'text') {
        header('Content-Disposition: attachment; filename='.$b->dumpFilename($Vc).".$K".($Fe != 'file' && preg_match('~^[0-9a-z]+$~', $Fe) ? ".$Fe" : ''));
    }session_write_close();
    ob_flush();
    flush();

    return $K;
}function dump_csv($L)
{
    foreach ($L as $z => $X) {
        if (preg_match('~["\n,;\t]|^0|\.\d*0$~', $X) || $X === '') {
            $L[$z] = '"'.str_replace('"', '""', $X).'"';
        }
    }echo implode(($_POST['format'] == 'csv' ? ',' : ($_POST['format'] == 'tsv' ? "\t" : ';')), $L)."\r\n";
}function apply_sql_function($q, $c)
{
    return $q ? ($q == 'unixepoch' ? "DATETIME($c, '$q')" : ($q == 'count distinct' ? 'COUNT(DISTINCT ' : strtoupper("$q("))."$c)") : $c;
}function get_temp_dir()
{
    $K = ini_get('upload_tmp_dir');
    if (! $K) {
        if (function_exists('sys_get_temp_dir')) {
            $K = sys_get_temp_dir();
        } else {
            $vc = @tempnam('', '');
            if (! $vc) {
                return false;
            }$K = dirname($vc);
            unlink($vc);
        }
    }

    return $K;
}function file_open_lock($vc)
{
    $p = @fopen($vc, 'r+');
    if (! $p) {
        $p = @fopen($vc, 'w');
        if (! $p) {
            return;
        }chmod($vc, 0660);
    }flock($p, LOCK_EX);

    return $p;
}function file_write_unlock($p, $sb)
{
    rewind($p);
    fwrite($p, $sb);
    ftruncate($p, strlen($sb));
    flock($p, LOCK_UN);
    fclose($p);
}function password_file($g)
{
    $vc = get_temp_dir().'/adminer.key';
    $K = @file_get_contents($vc);
    if ($K || ! $g) {
        return $K;
    }$p = @fopen($vc, 'w');
    if ($p) {
        chmod($vc, 0660);
        $K = rand_string();
        fwrite($p, $K);
        fclose($p);
    }

    return $K;
}function rand_string()
{
    return md5(uniqid(mt_rand(), true));
}function select_value($X, $A, $l, $Cg)
{
    global $b;
    if (is_array($X)) {
        $K = '';
        foreach ($X as $md => $W) {
            $K .= '<tr>'.($X != array_values($X) ? '<th>'.h($md) : '').'<td>'.select_value($W, $A, $l, $Cg);
        }

        return "<table cellspacing='0'>$K</table>";
    }if (! $A) {
        $A = $b->selectLink($X, $l);
    }if ($A === null) {
        if (is_mail($X)) {
            $A = "mailto:$X";
        }if (is_url($X)) {
            $A = $X;
        }
    }$K = $b->editVal($X, $l);
    if ($K !== null) {
        if (! is_utf8($K)) {
            $K = "\0";
        } elseif ($Cg != '' && is_shortable($l)) {
            $K = shorten_utf8($K, max(0, +$Cg));
        } else {
            $K = h($K);
        }
    }

    return $b->selectVal($K, $A, $l, $X);
}function is_mail($Vb)
{
    $va = '[-a-z0-9!#$%&\'*+/=?^_`{|}~]';
    $Jb = '[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])';
    $Re = "$va+(\\.$va+)*@($Jb?\\.)+$Jb";

    return is_string($Vb) && preg_match("(^$Re(,\\s*$Re)*\$)i", $Vb);
}function is_url($ig)
{
    $Jb = '[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])';

    return preg_match("~^(https?)://($Jb?\\.)+$Jb(:\\d+)?(/.*)?(\\?.*)?(#.*)?\$~i", $ig);
}function is_shortable($l)
{
    return preg_match('~char|text|json|lob|geometry|point|linestring|polygon|string|bytea~', $l['type']);
}function count_rows($Q, $Z, $jd, $s)
{
    global $y;
    $I = ' FROM '.table($Q).($Z ? ' WHERE '.implode(' AND ', $Z) : '');

    return $jd && ($y == 'sql' || count($s) == 1) ? 'SELECT COUNT(DISTINCT '.implode(', ', $s).")$I" : 'SELECT COUNT(*)'.($jd ? " FROM (SELECT 1$I GROUP BY ".implode(', ', $s).') x' : $I);
}function slow_query($I)
{
    global $b,$T,$j;
    $i = $b->database();
    $Eg = $b->queryTimeout();
    $Wf = $j->slowQuery($I, $Eg);
    if (! $Wf && support('kill') && is_object($f = connect()) && ($i == '' || $f->select_db($i))) {
        $od = $f->result(connection_id());
        echo '<script',nonce(),'>
var timeout = setTimeout(function () {
	ajax(\'',js_escape(ME),'script=kill\', function () {
	}, \'kill=',$od,'&token=',$T,'\');
}, ',1000 * $Eg,');
</script>
';
    } else {
        $f = null;
    }ob_flush();
    flush();
    $K = @get_key_vals(($Wf ? $Wf : $I), $f, false);
    if ($f) {
        echo script('clearTimeout(timeout);');
        ob_flush();
        flush();
    }

    return $K;
}function get_token()
{
    $nf = rand(1, 1e6);

    return ($nf ^ $_SESSION['token']).":$nf";
}function verify_token()
{
    [$T, $nf] = explode(':', $_POST['token']);

    return ($nf ^ $_SESSION['token']) == $T;
}function lzw_decompress($Da)
{
    $Gb = 256;
    $Ea = 8;
    $Ta = [];
    $yf = 0;
    $zf = 0;
    for ($t = 0; $t < strlen($Da); $t++) {
        $yf = ($yf << 8) + ord($Da[$t]);
        $zf += 8;
        if ($zf >= $Ea) {
            $zf -= $Ea;
            $Ta[] = $yf >> $zf;
            $yf &= (1 << $zf) - 1;
            $Gb++;
            if ($Gb >> $Ea) {
                $Ea++;
            }
        }
    }$Fb = range("\0", "\xFF");
    $K = '';
    foreach ($Ta as $t => $Sa) {
        $Ub = $Fb[$Sa];
        if (! isset($Ub)) {
            $Ub = $_h.$_h[0];
        }$K .= $Ub;
        if ($t) {
            $Fb[] = $_h.$Ub[0];
        }$_h = $Ub;
    }

    return $K;
}function on_help($Za, $Uf = 0)
{
    return script("mixin(qsl('select, input'), {onmouseover: function (event) { helpMouseover.call(this, event, $Za, $Uf) }, onmouseout: helpMouseout});", '');
}function edit_form($Q, $m, $L, $fh)
{
    global $b,$y,$T,$k;
    $rg = $b->tableName(table_status1($Q, true));
    page_header(($fh ? 'Edit' : 'Insert'), $k, ['select' => [$Q, $rg]], $rg);
    $b->editRowPrint($Q, $m, $L, $fh);
    if ($L === false) {
        echo "<p class='error'>".'No rows.'."\n";
    }echo '<form action="" method="post" enctype="multipart/form-data" id="form">
';
    if (! $m) {
        echo "<p class='error'>".'You have no privileges to update this table.'."\n";
    } else {
        echo "<table cellspacing='0' class='layout'>".script("qsl('table').onkeydown = editingKeydown;");
        foreach ($m as $E => $l) {
            echo '<tr><th>'.$b->fieldName($l);
            $zb = $_GET['set'][bracket_escape($E)];
            if ($zb === null) {
                $zb = $l['default'];
                if ($l['type'] == 'bit' && preg_match("~^b'([01]*)'\$~", $zb, $vf)) {
                    $zb = $vf[1];
                }
            }$Y = ($L !== null ? ($L[$E] != '' && $y == 'sql' && preg_match('~enum|set~', $l['type']) ? (is_array($L[$E]) ? array_sum($L[$E]) : +$L[$E]) : (is_bool($L[$E]) ? +$L[$E] : $L[$E])) : (! $fh && $l['auto_increment'] ? '' : (isset($_GET['select']) ? false : $zb)));
            if (! $_POST['save'] && is_string($Y)) {
                $Y = $b->editVal($Y, $l);
            }$q = ($_POST['save'] ? (string) $_POST['function'][$E] : ($fh && preg_match('~^CURRENT_TIMESTAMP~i', $l['on_update']) ? 'now' : ($Y === false ? null : ($Y !== null ? '' : 'NULL'))));
            if (! $_POST && ! $fh && $Y == $l['default'] && preg_match('~^[\w.]+\(~', $Y)) {
                $q = 'SQL';
            }if (preg_match('~time~', $l['type']) && preg_match('~^CURRENT_TIMESTAMP~i', $Y)) {
                $Y = '';
                $q = 'now';
            }input($l, $Y, $q);
            echo "\n";
        }if (! support('table')) {
            echo '<tr>'."<th><input name='field_keys[]'>".script("qsl('input').oninput = fieldChange;")."<td class='function'>".html_select('field_funs[]', $b->editFunctions(['null' => isset($_GET['select'])]))."<td><input name='field_vals[]'>"."\n";
        }echo "</table>\n";
    }echo "<p>\n";
    if ($m) {
        echo "<input type='submit' value='".'Save'."'>\n";
        if (! isset($_GET['select'])) {
            echo "<input type='submit' name='insert' value='".($fh ? 'Save and continue edit' : 'Save and insert next')."' title='Ctrl+Shift+Enter'>\n",($fh ? script("qsl('input').onclick = function () { return !ajaxForm(this.form, '".'Saving'."…', this); };") : '');
        }
    }echo $fh ? "<input type='submit' name='delete' value='".'Delete'."'>".confirm()."\n" : ($_POST || ! $m ? '' : script("focus(qsa('td', qs('#form'))[1].firstChild);"));
    if (isset($_GET['select'])) {
        hidden_fields(['check' => (array) $_POST['check'], 'clone' => $_POST['clone'], 'all' => $_POST['all']]);
    }echo '<input type="hidden" name="referer" value="',h(isset($_POST['referer']) ? $_POST['referer'] : $_SERVER['HTTP_REFERER']),'">
<input type="hidden" name="save" value="1">
<input type="hidden" name="token" value="',$T,'">
</form>
';
}if (isset($_GET['file'])) {
    if ($_SERVER['HTTP_IF_MODIFIED_SINCE']) {
        header('HTTP/1.1 304 Not Modified');
        exit;
    }header('Expires: '.gmdate('D, d M Y H:i:s', time() + 365 * 24 * 60 * 60).' GMT');
    header('Last-Modified: '.gmdate('D, d M Y H:i:s').' GMT');
    header('Cache-Control: immutable');
    if ($_GET['file'] == 'favicon.ico') {
        header('Content-Type: image/x-icon');
        echo lzw_decompress("\0\0\0` \0�\0\n @\0�C��\"\0`E�Q����?�tvM'�Jd�d\\�b0\0�\"��fӈ��s5����A�XPaJ�0���8�#R�T��z`�#.��c�X��Ȁ?�-\0�Im?�.�M��\0ȯ(̉��/(%�\0");
    } elseif ($_GET['file'] == 'default.css') {
        header('Content-Type: text/css; charset=utf-8');
        echo lzw_decompress("\n1̇�ٌ�l7��B1�4vb0��fs���n2B�ѱ٘�n:�#(�b.\rDc)��a7E����l�ñ��i1̎s���-4��f�	��i7�����t4���y�Zf4��i�AT�VV��f:Ϧ,:1�Qݼ�b2`�#�>:7G�1���s��L�XD*bv<܌#�e@�:4�!fo���t:<��咾�o��\ni���',�a_�:�i�Bv�|N�4.5Nf�i�vp�h��l��֚�O����= �OFQ��k\$��i����d2T�p��6�����-�Z�����6����h:�a�,����2�#8А�#��6n����J��h�t�����4O42��ok��*r���@p@�!������?�6��r[��L���:2B�j�!Hb��P�=!1V�\"��0��\nS���D7��Dڛ�C!�!��Gʌ� �+�=tC�.C��:+��=�������%�c�1MR/�EȒ4���2�䱠�`�8(�ӹ[W��=�yS�b�=�-ܹBS+ɯ�����@pL4Yd��q�����6�3Ĭ��Ac܌�Ψ�k�[&>���Z�pkm]�u-c:���Nt�δpҝ��8�=�#��[.��ޯ�~���m�y�PP�|I֛���Q�9v[�Q��\n��r�'g�+��T�2��V��z�4��8��(	�Ey*#j�2]��R����)��[N�R\$�<>:�>\$;�>��\r���H��T�\nw�N �wأ��<��Gw����\\Y�_�Rt^�>�\r}��S\rz�4=�\nL�%J��\",Z�8����i�0u�?�����s3#�ى�:���㽖��E]x���s^8��K^��*0��w����~���:��i���v2w����^7���7�c��u+U%�{P�*4̼�LX./!��1C��qx!H��Fd��L���Ġ�`6��5��f��Ć�=H�l �V1��\0a2�;��6����_ه�\0&�Z�S�d)KE'��n��[X��\0ZɊ�F[P�ޘ@��!��Y�,`�\"ڷ��0Ee9yF>��9b����F5:���\0}Ĵ��(\$����37H��� M�A��6R��{Mq�7G��C�C�m2�(�Ct>[�-t�/&C�]�etG�̬4@r>���<�Sq�/���Q�hm���������L��#��K�|���6fKP�\r%t��V=\"�SH\$�} ��)w�,W\0F��u@�b�9�\rr�2�#�D��X���yOI�>��n��Ǣ%���'��_��t\rτz�\\1�hl�]Q5Mp6k���qh�\$�H~�|��!*4����`S���S t�PP\\g��7�\n-�:袪p����l�B���7Өc�(wO0\\:��w���p4���{T��jO�6HÊ�r���q\n��%%�y']\$��a�Z�.fc�q*-�FW��k��z���j���lg�:�\$\"�N�\r#�d�Â���sc�̠��\"j�\r�����Ւ�Ph�1/��DA)���[�kn�p76�Y��R{�M�P���@\n-�a�6��[�zJH,�dl�B�h�o�����+�#Dr^�^��e��E��� ĜaP���JG�z��t�2�X�����V�����ȳ��B_%K=E��b弾�§kU(.!ܮ8����I.@�K�xn���:�P�32��m�H		C*�:v�T�\nR�����0u�����ҧ]�����P/�JQd�{L�޳:Y��2b��T ��3�4���c�V=���L4��r�!�B�Y�6��MeL������i�o�9< G��ƕЙMhm^�U�N����Tr5HiM�/�n�흳T��[-<__�3/Xr(<���������uҖGNX20�\r\$^��:'9�O��;�k����f��N'a����b�,�V��1��HI!%6@��\$�EGڜ�1�(mU��rս���`��iN+Ü�)���0l��f0��[U��V��-:I^��\$�s�b\re��ug�h�~9�߈�b�����f�+0�� hXrݬ�!\$�e,�w+����3��_�A�k��\nk�r�ʛcuWdY�\\�={.�č���g��p8�t\rRZ�v�J:�>��Y|+�@����C�t\r��jt��6��%�?��ǎ�>�/�����9F`ו��v~K�����R�W��z��lm�wL�9Y�*q�x�z��Se�ݛ����~�D�����x���ɟi7�2���Oݻ��_{��53��t���_��z�3�d)�C��\$?KӪP�%��T&��&\0P�NA�^�~���p� �Ϝ���\r\$�����b*+D6궦ψ��J\$(�ol��h&��KBS>���;z��x�oz>��o�Z�\nʋ[�v���Ȝ��2�OxِV�0f�����2Bl�bk�6Zk�hXcd�0*�KT�H=��π�p0�lV����\r���n�m��)(�(�:#����E��:C�C���\r�G\ré0��i����:`Z1Q\n:��\r\0���q���:`�-�M#}1;����q�#|�S���hl�D�\0fiDp�L��``����0y��1���\r�=�MQ\\��%oq��\0��1�21�1�� ���ќbi:��\r�/Ѣ� `)��0��@���I1�N�C�����O��Z��1���q1 ����,�\rdI�Ǧv�j�1 t�B���⁒0:�0��1�A2V���0���%�fi3!&Q�Rc%�q&w%��\r��V�#���Qw`�% ���m*r��y&i�+r{*��(rg(�#(2�(��)R@i�-�� ���1\"\0��R���.e.r��,�ry(2�C��b�!Bޏ3%ҵ,R�1��&��t��b�a\rL��-3�����\0��Bp�1�94�O'R�3*��=\$�[�^iI;/3i�5�&�}17�# ѹ8��\"�7��8�9*�23�!�!1\\\0�8��rk9�;S�23��ړ*�:q]5S<��#3�83�#e�=�>~9S螳�r�)��T*a�@і�bes���:-���*;,�ؙ3!i���LҲ�#1 �+n� �*��@�3i7�1���_�F�S;3�F�\rA��3�>�x:� \r�0��@�-�/��w��7��S�J3� �.F�\$O�B���%4�+t�'g�Lq\rJt�J��M2\r��7��T@���)ⓣd��2�P>ΰ��Fi಴�\nr\0��b�k(�D���KQ����1�\"2t����P�\r��,\$KCt�5��#��)��P#Pi.�U2�C�~�\"�");
    } elseif ($_GET['file'] == 'functions.js') {
        header('Content-Type: text/javascript; charset=utf-8');
        echo lzw_decompress("f:��gCI��\n8��3)��7���81��x:\nOg#)��r7\n\"��`�|2�gSi�H)N�S��\r��\"0��@�)�`(\$s6O!��V/=��' T4�=��iS��6IO�G#�X�VC��s��Z1.�hp8,�[�H�~Cz���2�l�c3���s���I�b�4\n�F8T��I���U*fz��r0�E����y���f�Y.:��I��(�c��΋!�_l��^�^(��N{S��)r�q�Y��l٦3�3�\n�+G���y���i���xV3w�uh�^r����a۔���c��\r���(.��Ch�<\r)�ѣ�`�7���43'm5���\n�P�:2�P����q ���C�}ī�����38�B�0�hR��r(�0��b\\0�Hr44��B�!�p�\$�rZZ�2܉.Ƀ(\\�5�|\nC(�\"��P���.��N�RT�Γ��>�HN��8HP�\\�7Jp~���2%��OC�1�.��C8·H��*�j����S(�/��6KU����<2�pOI���`���ⳈdO�H��5�-��4��pX25-Ң�ۈ�z7��\"(�P�\\32:]U����߅!]�<�A�ۤ���iڰ�l\r�\0v��#J8��wm��ɤ�<�ɠ��%m;p#�`X�D���iZ��N0����9��占��`��wJ�D��2�9t��*��y��NiIh\\9����:����xﭵyl*�Ȉ��Y�����8�W��?���ޛ3���!\"6�n[��\r�*\$�Ƨ�nzx�9\r�|*3ףp�ﻶ�:(p\\;��mz���9����8N���j2����\r�H�H&��(�z��7i�k� ����c��e���t���2:SH�Ƞ�/)�x�@��t�ri9����8����yҷ���V�+^Wڦ��kZ�Y�l�ʣ���4��Ƌ������\\E�{�7\0�p���D��i�-T����0l�%=���˃9(�5�\n\n�n,4�\0�a}܃.��Rs\02B\\�b1�S�\0003,�XPHJsp�d�K� CA!�2*W����2\$�+�f^\n�1����zE� Iv�\\�2��.*A���E(d���b��܄��9����Dh�&��?�H�s�Q�2�x~nÁJ�T2�&��eR���G�Q��Tw�ݑ��P���\\�)6�����sh\\3�\0R	�'\r+*;R�H�.�!�[�'~�%t< �p�K#�!�l���Le����,���&�\$	��`��CX��ӆ0֭����:M�h	�ڜG��!&3�D�<!�23��?h�J�e ��h�\r�m���Ni�������N�Hl7��v��WI�.��-�5֧ey�\rEJ\ni*�\$@�RU0,\$U�E����ªu)@(t�SJk�p!�~���d`�>��\n�;#\rp9�jɹ�]&Nc(r���TQU��S��\08n`��y�b���L�O5��,��>���x���f䴒���+��\"�I�{kM�[\r%�[	�e�a�1! ����Ԯ�F@�b)R��72��0�\nW���L�ܜҮtd�+���0wgl�0n@��ɢ�i�M��\nA�M5n�\$E�ױN��l�����%�1 A������k�r�iFB���ol,muNx-�_�֤C( ��f�l\r1p[9x(i�BҖ��zQl��8C�	��XU Tb��I�`�p+V\0��;�Cb��X�+ϒ�s��]H��[�k�x�G*�]�awn�!�6�����mS���I��K�~/�ӥ7��eeN��S�/;d�A�>}l~��� �%^�f�آpڜDE��a��t\nx=�kЎ�*d���T����j2��j��\n��� ,�e=��M84���a�j@�T�s���nf��\n�6�\rd��0���Y�'%ԓ��~	�Ҩ�<���AH�G��8���΃\$z��{���u2*��a��>�(w�K.bP�{��o��´�z�#�2�8=�8>���A,�e���+�C�x�*���-b=m���,�a��lzk���\$W�,�m�Ji�ʧ���+���0�[��.R�sK���X��ZL��2�`�(�C�vZ������\$�׹,�D?H��NxX��)��M��\$�,��*\nѣ\$<q�şh!��S����xsA!�:�K��}�������R��A2k�X�p\n<�����l���3�����VV�}�g&Yݍ!�+�;<�Y��YE3r�َ��C�o5����ճ�kk�����ۣ��t��U���)�[����}��u��l�:D��+Ϗ _o��h140���0��b�K�㬒�����lG��#��������|Ud�IK���7�^��@��O\0H��Hi�6\r����\\cg\0���2�B�*e��\n��	�zr�!�nWz&� {H��'\$X �w@�8�DGr*���H�'p#�Į���\nd���,���,�;g~�\0�#����E��\r�I`��'��%E�.�]`�Л��%&��m��\r��%4S�v�#\n��fH\$%�-�#���qB�����Q-�c2���&���]�� �qh\r�l]�s���h�7�n#����-�jE�Fr�l&d����z�F6����\"���|���s@����z)0rpڏ\0�X\0���|DL<!��o�*�D�{.B<E���0nB(� �|\r\n�^���� h�!���r\$��(^�~����/p�q��B��O����,\\��#RR��%���d�Hj�`����̭ V� bS�d�i�E���oh�r<i/k\$-�\$o��+�ŋ��l��O�&evƒ�i�jMPA'u'���( M(h/+��WD�So�.n�.�n���(�(\"���h�&p��/�/1D̊�j娸E��&⦀�,'l\$/.,�d���W�bbO3�B�sH�:J`!�.���������,F��7(��Կ��1�l�s �Ҏ���Ţq�X\r����~R鰱`�Ҟ�Y*�:R��rJ��%L�+n�\"��\r��͇H!qb�2�Li�%����Wj#9��ObE.I:�6�7\0�6+�%�.����a7E8VS�?(DG�ӳB�%;���/<�����\r ��>�M��@���H�Ds��Z[tH�Enx(���R�x��@��GkjW�>���#T/8�c8�Q0��_�IIGII�!���YEd�E�^�td�th�`DV!C�8��\r���b�3�!3�@�33N}�ZB�3	�3�30��M(�>��}�\\�t�f�f���I\r���337 X�\"td�,\nbtNO`P�;�ܕҭ���\$\n����Zѭ5U5WU�^ho���t�PM/5K4Ej�KQ&53GX�Xx)�<5D��\r�V�\n�r�5b܀\\J\">��1S\r[-��Du�\r���)00�Y��ˢ�k{\n��#��\r�^��|�uܻU�_n�U4�U�~Yt�\rI��@䏳�R �3:�uePMS�0T�wW�X���D��KOU����;U�\n�OY��Y�Q,M[\0�_�D���W��J*�\rg(]�\r\"ZC��6u�+�Y��Y6ô�0�q�(��8}��3AX3T�h9j�j�f�Mt�PJbqMP5>������Y�k%&\\�1d��E4� �Yn���\$<�U]Ӊ1�mbֶ�^�����\"NV��p��p��eM���W�ܢ�\\�)\n �\nf7\n�2��r8��=Ek7tV����7P��L��a6��v@'�6i��j&>��;��`��a	\0pڨ(�J��)�\\��n��Ĭm\0��2��eqJ��P��t��fj��\"[\0����X,<\\������+md��~�����s%o��mn�),ׄ�ԇ�\r4��8\r����mE�H]�����HW�M0D�߀��~�ˁ�K��E}����|f�^���\r>�-z]2s�xD�d[s�t�S��\0Qf-K`���t���wT�9��Z��	�\nB�9 Nb��<�B�I5o�oJ�p��JNd��\r�hލ��2�\"�x�HC�ݍ�:���9Yn16��zr+z���\\�����m ��T ���@Y2lQ<2O+�%��.Ӄh�0A���Z��2R��1��/�hH\r�X��aNB&� �M@�[x��ʮ���8&L�V͜v�*�j�ۚGH��\\ٮ	���&s�\0Q��\\\"�b��	��\rBs��w��	���BN`�7�Co(���\nè���1�9�*E� �S��U�0U� t�'|�m���?h[�\$.#�5	 �	p��yB�@R�]���@|��{���P\0x�/� w�%�EsBd���CU�~O׷�P�@X�]����Z3��1��{�eLY���ڐ�\\�(*R`�	�\n������QCF�*�����霬�p�X|`N���\$�[���@�U������Z�`Zd\"\\\"����)��I�:�t��oD�\0[�����-���g�����*`hu%�,����I�7ī�H�m�6�}��N�ͳ\$�M�UYf&1����e]pz���I��m�G/� �w �!�\\#5�4I�d�E�hq���Ѭk�x|�k�qD�b�z?���>���:��[�L�ƬZ�X��:�������j�w5	�Y��0 ���\$\0C��dSg����{�@�\n`�	���C ���M�����# t}x�N����{�۰)��C��FKZ�j��\0PFY�B�pFk��0<�>�D<JE��g\r�.�2��8�U@*�5fk��JD���4��TDU76�/��@��K+���J�����@�=��WIOD�85M��N�\$R�\0�5�\r��_���E���I�ϳN�l���y\\����qU��Q���\n@���ۺ�p���P۱�7ԽN\r�R{*�qm�\$\0R��ԓ���q�È+U@�B��Of*�Cˬ�MC��`_ ���˵N��T�5٦C׻� ��\\W�e&_X�_؍h���B�3���%�FW���|�Gޛ'�[�ł����V��#^\r��GR����P��Fg�����Yi ���z\n��+�^/�������\\�6��b�dmh��@q���Ah�),J��W��cm�em]�ӏe�kZb0�����Y�]ym��f�e�B;���O��w�apDW�����{�\0��-2/bN�sֽ޾Ra�Ϯh&qt\n\"�i�Rm�hz�e����FS7��PP�䖤��:B����sm��Y d���7}3?*�t����lT�}�~�����=c������	��3�;T�L�5*	�~#�A����s�x-7��f5`�#\"N�b��G����@�e�[�����s����-��M6��qq� h�e5�\0Ң���*�b�IS���Fή9}�p�-��`{��ɖkP�0T<��Z9�0<՚\r��;!��g�\r\nK�\n��\0��*�\nb7(�_�@,�e2\r�]�K�+\0��p C\\Ѣ,0�^�MЧ����@�;X\r��?\$\r�j�+�/��B��P�����J{\"a�6�䉜�|�\n\0��\\5���	156�� .�[�Uد\0d��8Y�:!���=��X.�uC����!S���o�p�B���7��ů�Rh�\\h�E=�y:< :u��2�80�si��TsB�@\$ ��@�u	�Q���.��T0M\\/�d+ƃ\n��=��d���A���)\r@@�h3���8.eZa|.�7�Yk�c���'D#��Y�@X�q�=M��44�B AM��dU\"�Hw4�(>��8���C�?e_`��X:�A9ø���p�G��Gy6��F�Xr��l�1��ػ�B�Å9Rz��hB�{����\0��^��-�0�%D�5F\"\"�����i�`��nAf� \"tDZ\"_�V\$��!/�D�ᚆ������٦�̀F,25�j�T��y\0�N�x\r�Yl��#��Eq\n��B2�\n��6���4���!/�\n��Q��*�;)bR�Z0\0�CDo�˞�48������e�\n�S%\\�PIk��(0��u/��G������\\�}�4Fp��G�_�G?)g�ot��[v��\0��?b�;��`(�ی�NS)\n�x=��+@��7��j�0��,�1Åz����>0��Gc��L�VX�����%����Q+���o�F���ܶ�>Q-�c���l����w��z5G��@(h�c�H��r?��Nb�@�������lx3�U`�rw���U���t�8�=�l#���l�䨉8�E\"����O6\n��1e�`\\hKf�V/зPaYK�O�� ��x�	�Oj���r7�F;��B����̒��>�Ц�V\rĖ�|�'J�z����#�PB��Y5\0NC�^\n~LrR��[̟Rì�g�eZ\0x�^�i<Q�/)�%@ʐ��fB�Hf�{%P�\"\"���@���)���DE(iM2�S�*�y�S�\"���e̒1��ט\n4`ʩ>��Q*��y�n����T�u�����~%�+W��XK���Q�[ʔ��l�PYy#D٬D<�FL���@�6']Ƌ��\rF�`�!�%\n�0�c���˩%c8WrpG�.T�Do�UL2�*�|\$�:�Xt5�XY�I�p#� �^\n��:�#D�@�1\r*�K7�@D\0��C�C�xBh�EnK�,1\"�*y[�#!�י�ٙ���l_�/��x�\0���5�Z��4\0005J�h\"2���%Y���a�a1S�O�4��%ni��P��ߴq�_ʽ6���~��I\\���d���d������D�����3g^��@^6����_�HD�.ksL��@��Ɉ�n�I���~�\r�b�@�Ӏ�N�t\0s���]:u��X�b@^�1\0���2?�T��6dLNe��+�\0�:�Ё�l��z6q=̺x���N6��O,%@s�0\n�\\)�L<�C�|���P��b����A>I���\"	��^K4��gIX�i@P�jE�&/1@�f�	�N�x0coaߧ����,C'�y#6F@�Р��H0�{z3t�|cXMJ.*B�)ZDQ���\0��T-v�X�a*��,*�<b���#xј�d�P��KG8�� y�K	\\#=�)�gȑh�&�8])�C�\nô��9�z�W\\�g�M 7��!��������,��9���\$T\"�,��%.F!˚ A�-�����-�g��\0002R>KE�'�U�_I���9�˼�j(�Q��@�@�4/�7���'J.�RT�\0]KS�D���Ap5�\r�H0!�´e	d@Rҝ�ิ�9�S�;7�H�B�bx�J��_�vi�U`@���SAM��X��G�Xi��U*��������'��:V�WJv�D���N'\$�zh\$d_y���Z]����Y���8ؔ���]�P�*h���֧e;��pe��\$k�w��*7N�DTx_�ԧ�Gi�&P�Ԇ�t͆�b�\\E�H\$i�E\"cr��0l�?>��C(�W@3���22a���I����{�B`�ڳiŸGo^6E\r��G�M�p1i�I��X�\0003�2�K�����zl&ֆ�'IL�\\�\"�7�>�j(>�j�FG_��& 10I�A31=h q\0�F����ķ��_�J���ԳVΖ��܆q�՚��	��(/�dOC�_sm�<g�x\0��\"��\n@EkH\0�J���8�(���km[����S4�\nY40��+L\n������#Bӫb��%R֖��׭��R:�<\$!ۥr�;���	%|ʨ�(�|�H�\0�������]�cҡ=0��Z�\"\"=�X��)�f�N��6V}F��=[���ৢhu�-��\0t��bW~��Q��iJ���L�5׭q#kb���Wn���Q�T�!���e�nc�S�[+ִE�<-��a]Ń��Yb�\n\nJ~�|JɃ8� �Lp����o� �N�ܨ�J.��ŃS��2c9�j�y�-`a\0��*�ֈ@\0+��mg��6�1��Me\0��Q �_�}!I��GL�f)�X�o,�Shx�\0000\"h�+L�M�� �ј��Z	j�\0���/��\$��>u*�Z9��Z�e��+J����tz������R�Kԯ���Dy���q�0C�-f��m����BI�|��HB��sQl�X��.����|�c���[��ZhZ��l���x�@'��ml�KrQ�26��]�ҷn�d[��񎩇d���\"GJ9u��B�o��Zߖ�a��n@��n�lW|*gX�\nn2�F�|x`Dk��uPP�!Q\rr��`W/���	1�[-o,71bUs����N�7����Gq�.\\Q\"CCT\"�����*?u�ts�����]�٩Pz[�[YFϹ��FD3�\"����]�u۝)wz�:#���Iiw��pɛ��{�o�0n��;��\\�x���\0q��m����&�~��7����9[�H�qdL�O�2�v�|B�t��\\Ƥ�Hd���H�\" ��N\n\0��G�g�F��F�}\"�&QEK��{}\ryǎ��rכt������7�Nuó[A�gh;S�.Ҡ���¥|y��[Ն_b�Ȩ�!+R��ZX�@0N����P���%�jD�¯z	���[�U\"�{e�8��>�EL4Jн�0����7 ��d�� �Q^`0`�����]c�<g@��hy8��p.ef\n��eh��aX����mS��jBژQ\"�\r���K3�=>ǪAX�[,,\"'<���%�a��Ӵ��.\$�\0�%\0�sV���p�M\$�@j���>���}Ve�\$@�̈́#���(3:�`�U�Y��u�������@�V#E�G/��XD\$�h��av��xS\"]k18a�я�9dJROӊs�`EJ����Uo�m{l�B8���(\n}ei�b��, �;�N��͇�Q�\\�ǸI5yR�\$!>\\ʉ�g�uj*?n�M�޲h��\r%���U(d��N�d#}�pA:����-\\�A�*�4�2I���\r�֣�� 0h@\\Ե��8�3�rq]���d8\"�Q����ƙ:c��y�4	�ᑚda�Π6>U�A����:��@�2���\$�eh2���F��əN�+���\r�Ԁ(�Ar��d*�\0[�#cj����>!(�S���L�e�T��M	9\0W:�BD���3J���_@s��rue������ +�'B��}\"B\"�z2��r��l�xF[�L�˲Ea9��cdb��^,�UC=/2�����/\$�C�#��8�}D���6�`^;6B0U7�_=	,�1�j1V[�.	H9(1���ҏLz�C�	�\$.A�fh㖫����DrY	�H�e~o�r19��م\\�߄P�)\"�Q��,�e��L��w0�\0������;w�X�ǝ���qo���~�����>9�>}��dc�\0��g��f��q�&9���-�J#����3^4m/���\0\0006��n8��>䈴.ӗ��cph��������_A@[��7�|9\$pMh�>���5�K���E=h��A�t�^�V�	�\"�	c�B;���i��QҠt����@,\n�)���s�`����;�4����I�������y��-�0yeʨ�U��B�v��3H�P�G�5��s|��\r���\$0����1��l3��(*oF~PK��.�,'�J/�Ӳ�t���d�:��n�\n��j��Y�z�(����w���Z�#Z�	Io�@1�λ\$��=VWz�	n�B�a���A��q�@��I�p	@�5Ӗ�lH{U��oX��f��ӿ\\z��.���,-\\ڗ^y n^���Bq����zX㉡�\$�*J72�D4.����!�M0��D��F����G��L�m�c*m�cI��5Ɍ�^�t���jl�7替S�Q��.i����h��L�ڱB6Ԅh�&�J��l\\��We�c�f%kj�� �p�R=��i�@.��(�2�klHUW\"�o�j���p!S5��pL'`\0�O *�Q3X��lJ\08\n�\r���*�a��떞��r�`<�&�XBh�8!x��&�Bht�\$���]�n߆���cL��[Ƶ�d��<`���\0���ς�aw�O%;���BC��Q�\r̭�����p����PQ�Z���Z�Au=N&�ia\n�mK6I}��n	��t\nd)�����bp��\"��g'�0�7�u�&@�7�8X�N��x������\$B��ZB/�M�gB�i��ѧ�\\�m�mI�Ā��;5=#&4����P�Ս����q�A��\\�,q�cޟ\nc�B�����w\0BgjD�@;�=0m�k��\rĲ�`��'5���k-�{��\0�_�Mu����2��׆����q����>)9�W\n�d+��ԧ�G\r��n4���O�:5���8��1�:Κ?��(yGgWK�\r�7����m5.��e�H�hJ�Ak#��L�..�\\�=��U�Є����:�>7�W+^yD���b��G��OZ�4�r�(|x���Pr��,y���8qaܩO2��k�n��#p2��ǈ�ؔ.��c��U�c����łj�\$��8Ĭ~��7ZR:�׆8�9Ψw(a�L�%�-,��쿌#�f�%8��|�c������%X�W�\n}6��H����˞��#�&J,'z�M�M�����ຑ܆� ���/y6YQ���ںdәd����:����E��p2g�g�/�,����Ո'8�^;�UWN�����{�OC�����z�iKX��ڔN�dG�RCJY����i���y#>zS�MUc�������RORԾ�0�)�0��]:=Ϟ�t�����'\$�s�rF���67	=\$B��!qs	1\"���v��%��I�l<�b!ۮ6(Cd-�^<H`~2�K��zK�ٜ�Ա���y,qA�*�\0}��C�pb�\\�S�5����'(����|�M����W��5;\$5�T|��;k���t���@��;9�)��;i�.�;���_����F�=�D�M`H���\0�	 N @�%w��d��Pb�\$H|k�[��dCI!:l��,���<��u�t���NeϝW^�w�'6���D��f�u �ihI�Z:��~��ϣ�r���z�3�+�uoC�s2�b�ua�X��wWK�	HԶ27>�W���y����M�J��rpT��L��|`f��:���A�t�d|i��[w��j���W� 7���au�����e��A5�Q' ʐ\0��3�Ҿ\$����\rk)�a;���H=��֐~�IG�I�<���\"���I1'蠙�Gcm\0P\n�w��#�>���xB\"��Em|��2�\$}<3P�YX�go�d߶�<�����qE\"`���4�g�8r�]\n����:��qVb�T��m���9K&ғĤ�m�7)@��Qz���=��ߵű�H\n���}O�i}�\r٣.��v��p�JW&�u�55�0	�5��P�I��\n�������l\0O5*=��	�P-���H\0�f�%��tぺ*�S:�tϛ���?�ȂH����q4��K���@�Ԭ�܂.O(����Z�\$���]���o��n�z�A�!�t85<W�R2[�8���n5\$I��浕Z����]'}ET\n�����.���&�7��V�@�_�D�o��&J6��4i�j\$��EL���u��t����+I�Т���أ~�S�SZTX���PYz��\"\$V�_]�M(��7���������t_��S�����/��t���Ă���mH�:\0�5�- _Z'#���1�P��,�}(��~�\0��!Җ`-�P\ne�y (����`9O��!��;5�\n�\$�{������UA��7��!���[� �Y���F�濴�����>�8&����!CL���H����(�\0'Ǐ2��d\r%�;�k抐4��_O�>�5���@D�Ҽ��\0V�A�6' AY�����S�����rԾ�4�+h@b��������O�M\0���r̛�@�\rJ��m0\08�O���;k�Ӡ���A(6�|	`8 �\0��&��E�V��\0V�����wk�N��K����xdp���s�AL��A�X�k���u\0�����t �Ԣ�.�>(N��K'fld�A���?++��N��~������k�����PR\0��x������ʑ���BK]�bU��\\̛���d\0S@��Q��͉�b�\0\0b���\0_\\�@\nN���O�A��Pf��������ԏAj ��M4<�9���+�����`S�� ����w3T���7�X���T!\0e�PAI�b 1!\0��4���'� @�!�8\0��/���!:K�,�CAS�X�f�e��M��.:��:��t������._�d����81v`�B\"��!.^�*��N.^��\n�&\r(��.����O0��@��P��nj���ڗ#������&��rH�<��� �!��3��(i @�Aa��{� ¬#�S���6𨘶F@�����Y[O��(��.��/�B�����)L02B؈�-�ƀ��qp��J<�.Б\0\n��\0��/@8C�4P��\r	P�)��F���\$q.]�\"B#��	�#\\��84\$�s:.(*Oi>�|#T'`�Bu�a/���C��T�Ka�X8�`p�����\0`�\0");
    } elseif ($_GET['file'] == 'jush.js') {
        header('Content-Type: text/javascript; charset=utf-8');
        echo lzw_decompress("v0��F����==��FS	��_6MƳ���r:�E�CI��o:�C��Xc��\r�؄J(:=�E���a28�x�?�'�i�SANN���xs�NB��Vl0���S	��Ul�(D|҄��P��>�E�㩶yHch��-3Eb�� �b��pE�p�9.����~\n�?Kb�iw|�`��d.�x8EN��!��2��3���\r���Y���y6GFmY�8o7\n\r�0��\0�Dbc�!�Q7Шd8���~��N)�Eг`�Ns��`�S)�O���/�<�x�9�o�����3n��2�!r�:;�+�9�CȨ���\n<�`��b�\\�?�`�4\r#`�<�Be�B#�N ��\r.D`��j�4���p�ar��㢺�>�8�\$�c��1�c���c����{n7����A�N�RLi\r1���!�(�j´�+��62�X�8+����.\r����!x���h�'��6S�\0R����O�\n��1(W0���7q��:N�E:68n+��մ5_(�s�\r��/m�6P�@�EQ���9\n�V-���\"�.:�J��8we�q�|؇�X�]��Y X�e�zW�� �7��Z1��hQf��u�j�4Z{p\\AU�J<��k��@�ɍ��@�}&���L7U�wuYh��2��@�u� P�7�A�h����3Û��XEͅZ�]�l�@Mplv�)� ��HW���y>�Y�-�Y��/�������hC�[*��F�#~�!�`�\r#0P�C˝�f������\\���^�%B<�\\�f�ޱ�����&/�O��L\\jF��jZ�1�\\:ƴ>�N��XaF�A�������f�h{\"s\n�64������?�8�^p�\"띰�ȸ\\�e(�P�N��q[g��r�&�}Ph���W��*��r_s�P�h���\n���om������#���.�\0@�pdW �\$Һ�Q۽Tl0� ��HdH�)��ۏ��)P���H�g��U����B�e\r�t:��\0)\"�t�,�����[�(D�O\nR8!�Ƭ֚��lA�V��4�h��Sq<��@}���gK�]���]�=90��'����wA<����a�~��W��D|A���2�X�U2��yŊ��=�p)�\0P	�s��n�3�r�f\0�F���v��G��I@�%���+��_I`����\r.��N���KI�[�ʖSJ���aUf�Sz���M��%��\"Q|9��Bc�a�q\0�8�#�<a��:z1Uf��>�Z�l������e5#U@iUG��n�%Ұs���;gxL�pP�?B��Q�\\�b��龒Q�=7�:��ݡQ�\r:�t�:y(� �\n�d)���\n�X;����CaA�\r���P�GH�!���@�9\n\nAl~H���V\ns��ի�Ư�bBr���������3�\r�P�%�ф\r}b/�Α\$�5�P�C�\"w�B_��U�gAt��夅�^Q��U���j����Bvh졄4�)��+�)<�j^�<L��4U*���Bg�����*n�ʖ�-����	9O\$��طzyM�3�\\9���.o�����E(i������7	tߚ�-&�\nj!\r��y�y�D1g���]��yR�7\"������~����)TZ0E9M�YZtXe!�f�@�{Ȭyl	8�;���R{��8�Į�e�+UL�'�F�1���8PE5-	�_!�7��[2�J��;�HR��ǹ�8p痲݇@��0,ծpsK0\r�4��\$sJ���4�DZ��I��'\$cL�R��MpY&����i�z3G�zҚJ%��P�-��[�/x�T�{p��z�C�v���:�V'�\\��KJa��M�&���Ӿ\"�e�o^Q+h^��iT��1�OR�l�,5[ݘ\$��)��jLƁU`�S�`Z^�|��r�=��n登��TU	1Hyk��t+\0v�D�\r	<��ƙ��jG���t�*3%k�YܲT*�|\"C��lhE�(�\r�8r��{��0����D�_��.6и�;����rBj�O'ۜ���>\$��`^6��9�#����4X��mh8:��c��0��;�/ԉ����;�\\'(��t�'+�����̷�^�]��N�v��#�,�v���O�i�ϖ�>��<S�A\\�\\��!�3*tl`�u�\0p'�7�P�9�bs�{�v�{��7�\"{��r�a�(�^��E����g��/���U�9g���/��`�\nL\n�)���(A�a�\" ���	�&�P��@O\n師0�(M&�FJ'�! �0�<�H�������*�|��*�OZ�m*n/b�/�������.��o\0��dn�)����i�:R���P2�m�\0/v�OX���Fʳψ���\"�����0�0�����0b��gj��\$�n�0}�	�@�=MƂ0n�P�/p�ot������.�̽�g\0�)o�\n0���\rF����b�i��o}\n�̯�	NQ�'�x�Fa�J���L������\r��\r����0��'��d	oep��4D��ʐ�q(~�� �\r�E��pr�QVFH�l��Kj���N&�j!�H`�_bh\r1���n!�Ɏ�z�����\\��\r���`V_k��\"\\ׂ'V��\0ʾ`AC������V�`\r%�����\r����k@N����B�횙� �!�\n�\0Z�6�\$d��,%�%la�H�\n�#�S\$!\$@��2���I\$r�{!��J�2H�ZM\\��hb,�'||cj~g�r�`�ļ�\$���+�A1�E���� <�L��\$�Y%-FD��d�L焳��\n@�bVf�;2_(��L�п��<%@ڜ,\"�d��N�er�\0�`��Z��4�'ld9-�#`��Ŗ����j6�ƣ�v���N�͐f��@܆�&�B\$�(�Z&���278I ��P\rk\\���2`�\rdLb@E��2`P( B'�����0�&��{���:��dB�1�^؉*\r\0c<K�|�5sZ�`���O3�5=@�5�C>@�W*	=\0N<g�6s67Sm7u?	{<&L�.3~D��\rŚ�x��),r�in�/��O\0o{0k�]3>m��1\0�I@�9T34+ԙ@e�GFMC�\rE3�Etm!�#1�D @�H(��n ��<g,V`R]@����3Cr7s~�GI�i@\0v��5\rV�'������P��\r�\$<b�%(�Dd��PW����b�fO �x\0�} ��lb�&�vj4�LS��ִԶ5&dsF M�4��\".H�M0�1uL�\"��/J`�{�����xǐYu*\"U.I53Q�3Q��J��g��5�s���&jь��u�٭ЪGQMTmGB�tl-c�*��\r��Z7���*hs/RUV����B�Nˈ�����Ԋ�i�Lk�.���t�龩�rYi���-S��3�\\�T�OM^�G>�ZQj���\"���i��MsS�S\$Ib	f���u����:�SB|i��Y¦��8	v�#�D�4`��.��^�H�M�_ռ�u��U�z`Z�J	e��@Ce��a�\"m�b�6ԯJR���T�?ԣXMZ��І��p����Qv�j�jV�{���C�\r��7�Tʞ� ��5{P��]�\r�?Q�AA������2񾠓V)Ji��-N99f�l Jm��;u�@�<F�Ѡ�e�j��Ħ�I�<+CW@�����Z�l�1�<2�iF�7`KG�~L&+N��YtWH飑w	����l��s'g��q+L�zbiz���Ţ�.Њ�zW�� �zd�W����(�y)v�E4,\0�\"d��\$B�{��!)1U�5bp#�}m=��@�w�	P\0�\r�����`O|���	�ɍ����Y��JՂ�E��Ou�_�\n`F`�}M�.#1��f�*�ա��  �z�uc���� xf�8kZR�s2ʂ-���Z2�+�ʷ�(�sU�cD�ѷ���X!��u�&-vP�ر\0'L�X �L����o	��>�Վ�\r@�P�\rxF��E��ȭ�%����=5N֜��?�7�N�Å�w�`�hX�98 �����q��z��d%6̂t�/������L��l��,�Ka�N~�����,�'�ǀM\rf9�w��!x��x[�ϑ�G�8;�xA��-I�&5\$�D\$���%��xѬ���´���]����&o�-3�9�L��z���y6�;u�zZ ��8�_�ɐx\0D?�X7����y�OY.#3�8��ǀ�e�Q�=؀*��G�wm ���Y�����]YOY�F���)�z#\$e��)�/�z?�z;����^��F�Zg�����������`^�e����#�������?��e��M��3u�偃0�>�\"?��@חXv�\"������*Ԣ\r6v~��OV~�&ר�^g���đٞ�'��f6:-Z~��O6;zx��;&!�+{9M�ٳd� \r,9����W��ݭ:�\r�ٜ��@睂+��]��-�[g��ۇ[s�[i��i�q��y��x�+�|7�{7�|w�}����E��W��Wk�|J؁��xm��q xwyj���#��e��(�������ߞþ��� {��ڏ�y���M���@��ɂ��Y�(g͚-����������J(���@�;�y�#S���Y��p@�%�s��o�9;�������+��	�;����ZNٯº��� k�V��u�[�x��|q��ON?���	�`u��6�|�|X����س|O�x!�:���ϗY]�����c���\r�h�9n�������8'������\rS.1��USȸ��X��+��z]ɵ��?����C�\r��\\����\$�`��)U�|ˤ|Ѩx'՜����<�̙e�|�ͳ����L���M�y�(ۧ�l�к�O]{Ѿ�FD���}�yu��Ē�,XL\\�x��;U��Wt�v��\\OxWJ9Ȓ�R5�WiMi[�K��f(\0�dĚ�迩�\r�M����7�;��������6�KʦI�\r���xv\r�V3���ɱ.��R������|��^2�^0߾\$�Q��[�D��ܣ�>1'^X~t�1\"6L���+��A��e�����I��~����@����pM>�m<��SK��-H���T76�SMfg�=��GPʰ�P�\r��>�����2Sb\$�C[���(�)��%Q#G`u��Gwp\rk�Ke�zhj��zi(��rO�������T=�7���~�4\"ef�~�d���V�Z���U�-�b'V�J�Z7���)T��8.<�RM�\$�����'�by�\n5����_��w����U�`ei޿J�b�g�u�S��?��`���+��� M�g�7`���\0�_�-���_��?�F�\0����X���[��J�8&~D#��{P���4ܗ��\"�\0��������@ғ��\0F ?*��^��w�О:���u��3xK�^�w���߯�y[Ԟ(���#�/zr_�g��?�\0?�1wMR&M���?�St�T]ݴG�:I����)��B�� v����1�<�t��6�:�W{���x:=��ޚ��:�!!\0x�����q&��0}z\"]��o�z���j�w�����6��J�P۞[\\ }��`S�\0�qHM�/7B��P���]FT��8S5�/I�\r�\n ��O�0aQ\n�>�2�j�;=ڬ�dA=�p�VL)X�\n¦`e\$�TƦQJ��k�7�*O�� .����ġ�\r���\$#p�WT>!��v|��}�נ.%��,;�������f*?�焘��\0��pD��! ��#:MRc��B/06���	7@\0V�vg����hZ\nR\"@��F	����+ʚ�E�I�\n8&2�bX�PĬ�ͤ=h[���+�ʉ\r:��F�\0:*��\r}#��!\"�c;hŦ/0��ޒ�Ej�����]�Z�����\0�@iW_���h�;�V��Rb��P%!��b]SB����Ul	����r��\r�-\0��\"�Q=�Ih����	 F���L��FxR�э@�\0*�j5���k\0�0'�	@El�O���H�Cx�@\"G41�`ϼP(G91��\0��\"f:Qʍ�@�`'�>7�Ȏ�d�����R41�>�rI�H�Gt\n�R�H	��bҏ��71���f�h)D��8�B`���(�V<Q�8c? 2���E�4j\0�9��\r�͐�@�\0'F�D��,�!��H�=�*��E�(���?Ѫ&xd_H�ǢE�6�~�u��G\0R�X��Z~P'U=���@����l+A�\n�h�IiƔ���PG�Z`\$�P������.�;�E�\0�}� ��Q�����%���jA�W�إ\$�!��3r1� {Ӊ%i=IfK�!�e\$���8�0!�h#\\�HF|�i8�tl\$���l����l�i*(�G���L	 �\$��x�.�q\"�Wzs{8d`&�W��\0&E����15�jW�b��ć��V�R����-#{\0�Xi���g*��7�VF3�`妏�p@��#7�	�0��[Ү���[�éh˖\\�o{���T���]��Ŧᑀ8l`f@�reh��\n��W2�*@\0�`K(�L�̷\0vT��\0�c'L����:�� 0��@L1�T0b��h�W�|\\�-���DN��\ns3��\"����`Ǣ�肒�2��&��\r�U+�^��R�eS�n�i0�u˚b	J����2s��p�s^n<���♱�Fl�a�\0���\0�mA2�`|؟6	��nr���\0Dټ��7�&m�ߧ-)���\\���݌\n=���;*���b��蓈�T��y7c��|o�/����:���t�P�<��Y:��K�&C��'G/�@��Q�*�8�v�/��&���W�6p.\0�u3����Bq:(eOP�p	�駲���\r���0�(ac>�N�|��	�t��\n6v�_��e�;y���6f���gQ;y�β[S�	��g�ǰ�O�ud�dH�H�=�Z\r�'���qC*�)����g��E�O�� \"��!k�('�`�\nkhT��*�s��5R�E�a\n#�!1�����\0�;��S�iȼ@(�l���I� �v\r�nj~��63��Έ�I:h����\n.��2pl�9Bt�0\$b��p+�ǀ*�tJ����s�JQ8;4P(��ҧѶ!��.Ppk@�)6�5��!�(��\n+��{`=��H,Ɂ\\Ѵ�4�\"[�C���1���-���luo��4�[���E�%�\"��w] �(� ʏTe��)�K�A�E={ \n�`;?���-�G�5I����.%�����q%E���s���gF��s	�����K�G��n4i/,�i0�u�x)73�Szg���V[��h�Dp'�L<TM��jP*o�≴�\nH���\n�4�M-W�N�A/@�8mH��Rp�t�p�V�=h*0��	�1;\0uG��T6�@s�\0)�6��ƣT�\\�(\"���U,�C:��5i�K�l���ۧ�E*�\"�r����.@jR�J�Q��/��L@�SZ���P�)(jj�J������L*���\0���\r�-��Q*�Qڜg��9�~P@���H���\n-e�\0�Qw%^ ET�< 2H�@޴�e�\0� e#;��I�T�l���+A+C*�Y���h/�D\\�!鬚8�»3�AЙ��E��E�/}0t�J|���1Qm��n%(�p��!\n��±U�)\rsEX���5u%B- ��w]�*��E�)<+��qyV�@�mFH ���BN#�]�YQ1��:��V#�\$������<&�X������x��t�@]G��Զ��j)-@�q��L\nc�I�Y?qC�\r�v(@��X\0Ov�<�R�3X���Q�J����9�9�lxCuīd�� vT�Zkl\r�J��\\o�&?�o6E�q������\r���'3��ɪ�J�6�'Y@�6�FZ50�V�T�y���C`\0��VS!���&�6�6���rD�f`ꛨJvqz���F�����@�ݵ��҅Z.\$kXkJ�\\�\"�\"�֝i��:�E���\roX�\0>P��P�mi]\0�����aV��=���I6�����jK3���Z�Q�m�E���b�0:�32�V4N6����!�l�^ڦ�@h�hU��>:�	��E�>j�����0g�\\|�Sh�7y�ބ�\$��,5aė7&��:[WX4��q� ���J���ׂ�c8!�H���VD�Ď�+�D�:����9,DUa!�X\$��Я�ڋG�܌�B�t9-+o�t��L��}ĭ�qK��x6&��%x��tR�����\"�π�R�IWA`c���}l6��~�*�0vk�p���6��8z+�q�X��w*�E��IN�����*qPKFO\0�,�(��|�����k *YF5���;�<6�@�QU�\"��\rb�OAXÎv��v�)H��o`ST�pbj1+ŋ�e��� ʀQx8@�����5\\Q�,���ĉN��ޘb#Y�H��p1����kB�8N�o�X3,#Uک�'�\"�销�eeH#z��q^rG[��:�\r�m�ng����5��V�]��-(�W�0���~kh\\��Z��`��l����k �o�j�W�!�.�hF���[t�A�w�e�M૫��3!����nK_SF�j���-S�[r�̀w��0^�h�f�-����?���X�5�/������IY �V7�a�d �8�bq��b�n\n1YR�vT���,�+!����N�T��2I�߷�����������K`K\"�����O)\nY��4!}K�^����D@��na�\$@� ��\$A��j����\\�D[=�	bHp�SOAG�ho!F@l�U��`Xn\$\\�͈_��˘`���HB��]�2���\"z0i1�\\�����w�.�fy޻K)����� p�0���X�S>1	*,]��\r\"���<cQ��\$t��q��.��	<��+t,�]L�!�{�g���X��\$��6v����� ����%G�H������E����X��*��0ۊ)q�nC�)I���\"�����툳�`�KF����@�d�5��A��p�{�\\���pɾN�r�'�S(+5�Њ+�\"�Ā�U0�iː����!nM��brK���6ú�r���|a����@�x|��ka�9WR4\"?�5��p�ۓ��k�rĘ����ߒ����7Hp��5�YpW���G#�rʶAWD+`��=�\"�}�@H�\\�p���Ѐ�ߋ�)C3�!�sO:)��_F/\r4���<A��\nn�/T�3f7P1�6����OYлϲ���q��;�؁���a�XtS<��9�nws�x@1Ξxs�?��3Ş@���54��o�ȃ0����pR\0���������yq��L&S^:��Q�>\\4OIn��Z�n��v�3�3�+P��L(�������.x�\$�«C��Cn�A�k�c:L�6���r�w���h����nr�Z��=�=j�ђ���6}M�G�u~�3���bg4���s6s�Q��#:�3g~v3���<�+�<���a}ϧ=�e�8�'n)ӞcC�z��4L=h��{i����J�^~��wg�D�jL���^����=6ΧN�Ӕ����\\��D���N���E�?h�:S�*>��+�u�hh҅�W�E1j�x������t�'�t�[��wS���9��T��[�,�j�v����t��A#T���枂9��j�K-��ޠ���Y�i�Qe?��4Ӟ���_Wz����@JkWY�h��pu����j|z4���	�i��m�	�O5�\0>�|�9�ז��轠��gVy��u���=}gs_���V�sծ{�k�@r�^���(�w����H'��a�=i��N�4����_{�6�tϨ��ϗe�[�h-��Ul?J��0O\0^�Hl�\0.��Z������xu���\"<	�/7���� ���i:��\nǠ���;��!�3���_0�`�\0H`���2\0��H�#h�[�P<����עg����m@~�(��\0ߵk�Y�v���#>���\nz\n�@�Q�\n(�G��\n����'k����5�n�5ۨ�@_`Ї_l�1���wp�P�w���\0��c��oEl{�ݾ�7����o0����Ibϝ�n�z����﷛� ���{�8�w�=��|�/y�3a�߼#xq����@��ka�!�\08d�m��R[wvǋRGp8���v�\$Z���m��t��������������ǽ����u�o�p�`2��m|;#x�m�n�~;��V�E�������3O�\r�,~o�w[��N��}�� �cly��O����;��?�~�^j\"�Wz�:�'xW��.�	�u�(��Ý�q��<g��v�hWq��\\;ߟ8��)M\\��5vڷx=h�i�b-���|b���py�DЕHh\rce��y7�p��x��G�@D=� ����1��!4Ra\r�9�!\0'�Y����@>iS>����o��o��fsO 9�.����\"�F��l��20��E!Q���ːD9d�BW4��\0��y`RoF>F�a��0�����0	�2�<�I�P'�\\���I�\0\$��\n R�aU�.�sЄ��\"���1І�e�Y砢�Z�q��1�|��#�G!�P�P\0|�H�Fnp>W�:��`YP%�ď�\n�a8��P>�����`]��4�`<�r\0�Î������z�4����8�����4�`m�h:�Ϊ�HD���j�+p>*����8�ՠ0�8�A��:���с�]w�ú�z>9\n+�������:����ii�PoG0���1��)�Z�ږ�n�����eR֖��g�M�����gs�LC�r�8Ѐ�!�����3R)��0�0��s�I��J�VPpK\n|9e[���ˑ��D0����z4ϑ�o������,N8n��s�#{蓷z3�>�BS�\";�e5VD0���[\$7z0������=8�	T 3���Q�'R������n��L�yŋ��'�\0o��,��\0:[}(���|���X�>xvqW�?tB�E1wG;�!�݋5΀|�0��JI@��#���uņI��\\p8�!'�]߮��l-�l�S�B��,ӗ���]��1�ԕH��N�8%%�	��/�;�FGS���h�\\ل�c�t����2|�W�\$t��<�h�O��+#�B�aN1��{��y�w���2�\\Z&)�d�b'��,Xxm�~�H��@:d	>=-��lK��܏�J�\0���́�@�rϥ�@\"�(A����Z�7�h>����\\����#>���\0��Xr�Y��Yxŝ�q=:��Թ�\rl�o�m�gb��������D_�Tx�C���0.��y��R]�_���Z�ǻW�I��G��	Mɪ(��|@\0SO��s� {��@k}��FXS�b8��=��_����l�\0�=�g��{�H��yG���� s�_�J\$hk�F�q������d4ω����'���>vϏ��!_7�Vq��@1z�uSe��jKdyu���S�.�2�\"�{��K���?�s��˦h��R�d��`:y����Gھ\nQ�����ow��'��hS��>���L�X}��e���G��@9��퟈�W�|��Ϲ�@�_��uZ=��,���!}���\0�I@��#��\"�'�Y`��\\?��p��,G����ל_��'�G����	�T��#�o��H\r��\"���o�}��?��O鼔7�|'���=8�M��Q�y�a�H�?��߮� ���\0���bUd�67���I O����\"-�2_�0�\r�?�������hO׿�t\0\0002�~�° 4���K,��oh��	Pc���z`@��\"�����H; ,=��'S�.b��S����Cc���욌�R,~��X�@ '��8Z0�&�(np<pȣ�32(��.@R3��@^\r�+�@�,���\$	ϟ��E���t�B,���⪀ʰh\r�><6]#���;��C�.Ҏ����8�P�3��;@��L,+>���p(#�-�f1�z���,8�ߠ��ƐP�:9����R�۳����)e\0ڢR��!�\nr{��e����GA@*��n�D��6��������N�\r�R���8QK�0��颽��>PN���IQ=r<�;&��f�NGJ;�UA�����A�P�&������`�����);��!�s\0���p�p\r�����n(��@�%&	S�dY����uC�,��8O�#�����o���R�v,��#�|7�\"Cp����B�`�j�X3�~R�@��v�����9B#���@\n�0�>T�����-�5��/�=� ���E����\n��d\"!�;��p*n��Z�\08/�jX�\r��>F	Pϐe>��O��L����O0�\0�)�k���㦃[	��ϳ���'L��	����1 1\0��C�1T�`����Rʐz�Ě����p��������< .�>�5��\0���>� Bnˊ<\"he�>к�î��s�!�H�{ܐ�!\r�\r�\"��|��>R�1d���\"U@�D6����3���>o\r����v�L:K�2�+�0쾁�>��\0�� ���B�{!r*H��y;�`8\0��د��d����\r�0���2A����?��+�\0�Å\0A����wS��l����\r[ԡ�6�co�=����0�z/J+�ꆌ�W[��~C0��e�30HQP�DPY�}�4#YD���p)	�|�@���&�-��/F�	�T�	����aH5�#��H.�A>��0;.���Y�ġ	�*�D2�=3�	pBnuDw\n�!�z�C�Q \0��HQ4D�*��7\0�J��%ıp�uD�(�O=!�>�u,7��1��TM��+�3�1:\"P�����RQ?���P���+�11= �M\$Z��lT7�,Nq%E!�S�2�&��U*>GDS&����ozh8881\\:��Z0h���T �C+#ʱA%��D!\0�����XDA�3\0�!\\�#�h���9b��T�!d�����Y�j2��S����\nA+ͽ��H�wD`�(AB*��+%�E��X.ˠB�#��ȿ��&��Xe�Eo�\"��|�r��8�W�2�@8Da�|�������N�h����J8[�۳����W�z�{Z\"L\0�\0��Ȇ8�x�۶X@�� �E����h;�af��1��;n��hZ3�E����0|� 옑��A���t�B,~�W�8^�Ǡ׃��<2/	�8�+��۔���O+�%P#ή\n?�߉?��e˔�O\\]�7(#��D۾�(!c)�N����MF�E�#DX�g�)�0�A�\0�:�rB��``  ��Q��H>!\rB��\0��V%ce�HFH��m2�B�2I����`#���D>���n\n:L���9C���0��\0��x(ޏ�(\n����L�\"G�\n@���`[���\ni'\0��)������y)&��(p\0�N�	�\"��N:8��.\r!��'4|ל~����ʀ���\"�c��Dlt����0c��5kQQר+�Z��Gk�!F��c�4��Rx@�&>z=��\$(?���(\n쀨>�	�ҵ���Cqی��t-}�G,t�GW �xq�Hf�b\0�\0z���T9zwЅ�Dmn'�ccb�H\0z���3�!����� H��Hz׀�Iy\",�-�\0�\"<�2���'�#H`�d-�#cl�jĞ`��i(�_���dgȎ�ǂ*�j\r�\0�>� 6���6�2�kj�<�Cq��9�Đ��I\r\$C�AI\$x\r�H��7�8 ܀Z�pZrR����_�U\0�l\r��IR�Xi\0<����r�~�x�S��%��^�%j@^��T3�3ɀGH�z��&\$�(��q\0��f&8+�\rɗ%�2hC�x���I��lbɀ�(h�S�Y&��B������`�f��x�v�n.L+��/\"=I�0�d�\$4�7r����A���(4�2gJ(D��=F�����(����-'Ġ�XG�2�9Z=���,��r`);x\"��8;��>�&�����',�@��2�pl���:0�lI��\rr�JD���������hA�z22p�`O2h��8H��Ąwt�BF���g`7���2{�,Kl���߰%C%�om���������+X����41򹸎\n�2p��	ZB!�=V�ܨ�Ȁ�+H6���*��\0�k���%<� �K',3�r�I�;��8\0Z�+Eܭ�`������+l����W+�Yҵ-t��f�b�Q��_-Ӏޅ�+�� 95�LjJ.Gʩ,\\��ԅ.\$�2�J�\\�-��1�-c���ˇ.l�f�xBqK�,d��ˀ�8�A�Ko-��������3K��r��/|����/\\�r���,��HϤ�!�Y�1�0�@�.�&|����+��J\0�0P3J�-ZQ�	�\r&����\n�L�*���j�ĉ|�����#Ծ�\"˺���A��/���8�)1#�7\$\"�6\n>\n���7L�1���h9�\0�B�Z�d�#�b:\0+A���22��'̕\nt���̜�O��2lʳ.L��HC\0��2���+L�\\��r�Kk+���˳.ꌒ�;(Dƀ���1s����d�s9�����P4�쌜��@�.���A��nhJ�1�3�K�0��3J\$\0��2�Lk3��Q�;3��n\0\0�,�sI�@��u/VA�1���UM�<�Le4D�2��V�% �Ap\nȬ2��35���A-��T�u5�3�۹1+fL~�\n���	��->�� �ҡM�4XL�S��dٲ�͟*\\�@ͨ��Y�k����SDM�5 Xf����D�s���Us%	�̱p+K�6��/���ݒ�8X�ނ=K�6pH����%�3�ͫ7l�I�K0���L��D��u���`��P\r��SO͙&(;�L@��ψN>S��2��8(���`J�E��r�F	2��SE��M��M��\$q�E��\$�ã/I\$\\���ID�\"��\n䱺�w.t�S	���ђP��#\nW��-\0Cҵ�:j�R��^S���8;d�`���5Ԫ�aʖ��E��+(Xr�M�;��3�;���B,��*1&����2X�S���)<� �L9;�RSN����gIs+��ӰK�<��s�LY-Z�:A<���OO*��2v�W7��+|���˻<T���9�h����y\$<��#ρ;����v�\$��O�\0� �,Hk��-���Ϛ\r����ϣ;���O�>�����7>��3@O{.4�pO�?T�b���.�.~O�4��S���>1SS��*4�Pȣ�>�����3�\0�W�>��2��><���P?4��@��t\nN����A�xp��%=P@��C�@�R�˟?x��\n���0N�w�O?�TJC@��#�	.d���M��t�&=�\\�4��A��:L����\$���N��:��\r��I'���A�rግ;\r�/��C���B�Ӯ�i>L��7:9�����|�C\$��)�����z@�tl�:>��C�\n�Bi0G��,\0�FD%p)�o\0����\n>��`)QZI�KG�%M\0#\0�D���Q.H�'\$�E\n �\$ܐ%4I�D�3o�:L�\$��m ��0�	�B�\\(����8��通�h��D��C�sDX4TK���{��x�`\n�,��\nE��:�p\n�'��>��o\0���tI��` -\0�D��/��KP�`/���H�\$\n=���>��U�FP0���UG}4B\$?E����%�T�WD} *�H0�T�\0t������\"!o\0�E�7��R.���tfRFu!ԐD�\n�\0�F-4V�QH�%4��0uN\0�D�QRuE�	)��I\n�&Q�m�)ǚ�m �#\\����D��(\$̓x4��WFM&ԜR5H�%q��[F�+���IF \nT�R3D�L�o���y4TQ/E��[ў<�t^��F��)Q��+4�Q�I�#���IF�'TiѪX��!ѱF�*�nR�>�5�p��Km+�s��������I���R�E�+ԩ��M\0��(R�?�+HҀ�J�\"T�D���\$���	4wQ�}Tz\0�G�8|�x���R��6�R�	4XR6\n�4y�mN��Q�NM�&R�H&�2Q/�7#�қ�{�'�ҍ,|����\n�	.�\0�>�{�o#1D�;��?U��ҕJ�9�*����j����F�N��щJ� #�~%-?C���L�3�@EP�{`>Q�Ȕ��%O�)4�R%I�@��%,�\"���I�<�����\$ԉTP>�\n�\0QP5D��kOF�TY�<�o�Q�=T�\0��x	5�D�,�0?�i�?x�  �mE}>�|����[��\0����&RL���H�S9�G�I��1䀖��M4V�H�oT-S�)Q�G�F [��TQRjN��#x]N(�U�8\nuU\n?5,TmԞ?����?��@�U\n�u-��R�9��U/S \nU3�IESt�QYJu.�Q��F�o\$&���i	��KPC�6�>�5�G\0uR��u)U'R�0�Ѐ�DuIU�J@	��:�V8*�Rf%&�\\�R��MU9R��fUAU[T�UQSe[��\0�KeZUa��Uh��mS<���,R�s�`&Tj@��G�!\\x�^�0>��\0&��p�΂Q�Q�)T�U�Ps�@%\0�W�	`\$��(1�Q?�\$C�Qp\n�O�J��X�#��V7X�u;�!YB��S�c��+V����#MU�W�H��U�R�ǅU-+��VmY}\\���OK�M��\$�S�eToV���HT��!!<{�R��ZA5�R�!=3U��(�{@*Ratz\0)Q�P5H؏���հ�N5+���P�[��9�V%\"����\n����G�SL�����9�����l����\rV�ؤ�[�ou�UIY�R_T�Y�p5O֧\\�q`�U�[�Bu'Uw\\mRU�ԭ\\Es5�K\\���V�\\�S�{�AZ%O��\$��F���>�5E�WVm`��Wd]& \$�Ό����!R�Z}ԅ]}v5���ZUg��Q^y` �!^=F��R�^�v�U�Kex@+��r5�#�@?=�u�Γs���ץY�N�sS!^c�5�\$.�u`��\0�XE~1�9��J�UZ�@�#1_[�4J�2�\n�\$VI�4n�\0�?�4a�R�!U~)&��B>t�R�I�0��_EkTUS��|��Uk_�8�&��E��(‘?�@���J�5���JU�BQT}HV��j��Qx\ne�VsU=���V�N�4ղؗ\\x����R34�G�D\":	KQ�>�[�\r�Y_�#!�#][j<6خX	���c���#KL}>`'\0��5�X�cU�[\0��(���Wt|t�R]p�/�]H2I�QO��1�S�Qj�Z����H���m���)d�^SXCY\r�tu@J�p��%��M������?�UQ�\n�=R�ar:ԿE���-G�\0\$��d���]�meh*��Q�Wt��c��`��A�Y=S\r���	m-���=Mw�H�]J�\"䴏������f�\"�{#9Te����M�c��N�I����D������U�6��g��2��ݝ�e�a�L��Q&&uT�X�51Y�>����S�֊Q#�I���j�\0����W�P��?ub5FU�Ln�)V5R�@��\$!%o��P��'��E�U��P�-����B�p\n�F\$�S4�t�UF|{�q�ȓ0���Umjs�������\$�ڛj��c�ڐ��֫��aZI5X��j�26��&>v��\n\r)2�_k�G��TJ��eQ-c�Z�VM�ֽ�z>�]�a�c��c��`t��H��j�6��+k�M�\0�>���##3l=�'���^6�\0�èv�Z9Se��\"���bΡ�B>�)�/T�=�9\0�`P�\$\0�]�/0ڪ��䵏�k-�6��{k���[�F\r|�SѿJ��MQ�D=�/�WX���V�a�'���a�to��l冶�Xj}C@\"�KP����om�3\0#HV���v��~�{���?gx	n|[�?U��[r�h��G�`�3#Gk%L��\0�I�`C�D��	 \"\0��ŧ��#cN�6�ڹf���zێ�;Ѥ�eeF�7�/N\r:��Q�G�9	\$��I�ռ��]��T��WGs��dW�M�I����f�Bc�ۤ����!#cnu&(�S�_�w��Sf�&T�Z:��0C�S�LN`ܳYj=��>Ų��Z!=�rV]g��	ӣr���Xl��-.�U�'uJuJ\0�s�J�'W%���\\>?�B��V�j4���J}I/-ҝrRL�S�3\0,Rgqӭ��Tf>�1��\0�_���\\V8��Z�t��c耆�<^\\�ll�j\0���T�]C��w�ΓzI��ZwN���pVW�jv�Y�>�2�	o\$|U�W�L%{toX3_���R�J5~6\"��Zl}�`�kc����eR=^UԎ��1�ѽw7e�d��v��b�=��\0�f��,��m�)��Gp��-Ӽ�)9L���>|�� \"�@���5�`�:��\0�,��t@��x���l�J���b�6������a��A\0ػAR�[A���0\$qo�A��S��@���<@�y��\"as.����V^��讥^�����\0��H���[H@�bK����)z�\r����=��^�z�B\0�����N�o<̇t<�x�\0ڬ0*R��I{����^�E�:�{KՐ�1E�0��Y����/��c��\"\0��4���F�7'���\n�0��`U�T��?MP���l��4��r(	��Z�|���&��t\"I����L�w+�m}����Wi\r>�U__u��63�y[�8�T-��V�}�x��_~�%�7��{jM�o_�E�����~]�P\$�J�CaXG�9�\0007Ń5�A#�\0.���\r˴��_������%����\n�\r#<M�x�J���|��2�\0��;o�^a+F����笀Lk��;�_���#��M\\����pr@��õ�����OR���~z��A�NE�Y�O	(1N׉�R��8��C�����n?O)��1�A�Do\0�\r�Ǣ?�kJ��\"�,�OF��a����-b�6]PS�)ƙ�5xC�=@j����L�����L�:\"胻Ί�l#���B�k��������@��N��:�>�|B����9�	���:N��\$��S� �CB:j6����ΉJk��uK�_�W�͢ØI�=@Tv��\n0^o�\\�Ӡ?/��&u�.��_��\r��C��+��c�~�J�b�6���e\0�y�ѡ\0wx�h��8j%S���VH@N'�\\ۯ��N�`n\r��u�n�K�qU�B�+�f>G��\r���=@G���d���\n�)��FO� hʷ��ÈfC�ɅX|��I�]��3auy�Ui^�9y�\no^rt\r8��͇#����N	V��Y�;�c*�%V�<��#�h9r�\rxc�v(\ra���(xja�`g�0�V̼���Q��x(���glհ{��gh`sW<Kj�'�;)�Gnq\$�p�+�Ɍ_��d��^& ���D�x�!b�v�!EjPV�'����(�=�b�\r�\"�b��L�\0���bt�\n>J���1;�����ۈ�4^s�Q�p`�fr`7���x��E<l���	8s��'PT��ֺ�˃��z_�T[>��:��`�1.���;7�@��[��>��6!�*\$`��\0���`,�������@����?�m�>�>\0�LCǸ�R��n��/+�`;C����\0�*�<F���+���q M���;1�K\n�:b�3j1��l�:c>�Y���h���ގ�#�;���3ֺ�8�5�:�\\��\0XH���a�����M1�\\�L[YC��vN��\0+\0��t#�\$�����!@*�l��	F�dhd���F���&��Ƙf�)=��0��4�x\0004ED�6K��䢣���\0�nN�];q�4sj-�=-8���\0�sǨ���D�f5p4����J�^���'Ӕ[��H^�NR F�Kw�z�� ��E����gF|!�c���o�db����x�\0�-��6�,E��_���3u�p ��/�wz�(��ex�Ra�H�Y�ce��5�9d\0�0@2@Ґ�Y�fey��Y�cMו�h����[�ez\rv\\0�e���\\�cʃ��[�ue��NY`��ۖ�]9h姗~^Yqe���]�qe_|6!���u�`�f��J�{�7��M{�Yه��j�e��C��S6\0DuasFL}�\$ȇ�(��Mb���Ƥ,0Buί���т2�gxFљ{�a�n:i\rPj�e��r�r��G�BY��M+q��iY�d˙�`0��,>6�fo�0���o�� �Xf����\0�V�L!��f��l��6� �/��1e��\0�>kbf�\r�!�uf�<%�(r˛�a&	����Y��!���mBg=@��\r�; \r�5phI�9bm�\$BYˋ���g�x�#�@QEO��m9���0\"���!�t���ˉ��Ї�O* ���\0��>%�\$�o�rN&s9�f��4���g��~jM�f�wy�g�y�\\`X1y5x����^z�_,& k���|����1x��A�6� \n�o蔻�&x��gg�{r�?緛�-����|t�3�����}gHgK�9����J�<C�C��1��9�7��g����h6!0H���cdy�f��DA;��9�T���0��\0�p�����!� 6^�.�S²?���E(P�Έ .���5��h���EPJv��.���+�\$�5��>P+�?~��g�6\r��h��p�z(�W��`��\"y���:�FadŬ�6:��f��i\0����A;�e�����^��w�f� >y�����`-\r����\0�hr\r�r�8i\"_�	����9�CI��fXˈ2���\"�Ţ����h�L~�\"���%V�:!%��xy�izyg�vx�]���}qg����Zi��|��`�+ _�g�����٣������譞6PA�ʀ\$�=�9�����h��|p��������!��.�!�����i�^���iˢ�8zVC����Z\"����(�����9�U)��!DgU\0�j��?`��4�LTo@�B����N�a�{�r�:\n̟�E��8æ&=�E�*Z:\n?��g���̊��h��.����N�5(�S�h��i2�*c�f�@����7��z\"�|��rP�.ǀ�L8T'��k���:(�q2&��ED�2~���ر�����9���v���8������@��^X=X`��qZ��Q�֮`9j�5^���@竸�n�qv����3����(I6�j�dT���\\� ��3�,��h�k�3�(�3���P�u�V�|\0阮U�k;��JQ���.��	:J\r��1��n�BI\r\0ɬh@��?�N�\nsh���\"��;�r~7O�\$��(�5�R���	�ʽj����FYF��ܔ��~�x޾�f��\"�vۓo��˨��º#��a�����P���<��h�-3麝/G�x����n�i@\"�G�?��,�Zp�xX`v�4X������[�I��7�åXc	��!�b�}�j�_��9�5qti�6f������ٞ5���Fƹ�iѱ�pX'�2��r���0�ƺ��D,#G�U2��؏�I��\rl(�� �챣��=�A�a�쩳-8�dbS����4~���H;���0�6��b��{��޺R���s3z�����N�ބ��`�ˆ+���4<�^a�y���	}r���y������k�&4@��?~���cE����@�LS@���z^�qqN��</H�j^sC�`��sbgGy����^\n�N�\n:G�N}�c\n����� +���=�p�1��N�TB[d������Ћ��ܹ�`�n�oj;�jěwh����c9��p̡[y4���05�͋N��+ο��`Xda��/zn*�P�����#t�赸~�9W�	�V��~=�#��n)����	2��;�j:��J�k�C�!>x��5��==�2���.��|�'���[��'�;��v�������������;:SA	�&�[�me���n������˵���<��6ma�=Y.神��:g����腀����;�I߻x�[��I�J\0�~�zaY������wT\\`��V\n�~P)�zJ�������Q@��[�{rʉ�D�B�v��|i-�E��K�;^n�{���:Nh;���2��ƀp�Ѵ6����罘9�9����X�hQ�~���iA�@D �j���}�ozLV���ѳ~���	8B?�#F}F�Td����e��zc��F���g�7Η���� 6�#.E£����£��S�.J3��5��Kɥ�J���;���n5��:yS��C�voս.�{��	d\\0�?W\0!)�'����Eg�;�+��\0�Y�Nt�bp+��c�����\0�B=\"�c�T�:B������c��������P�I��D��V0��!ROl�O�N~aF�|%�ߺ�����)O��	�W�o����Q�w��:ٟl�0h@:���օ8�Q�&�[�n�F��p,�æ�@��JT�w�9��(���<�{�ƐO\r�	���ڂ\$m�/HnP\$o^�U��\"���{Ė�<.���n�q8\r�\0;�n������硟�+�޳3��n{�D\$7�,Ez7\0��l!{��8��x҂�.s8�PA�Fx�r����Qۮ���1̅�p+@�d��9OP5�lK�/�����\\m����s�q���v�Q�/���	�!���z�7�o��Eǆ�:q�V�5�?G�HO��O�\$�l��+�,�\r;�����~�Ač錳�{�`7|��Ă���r'��Ji\rc+�|�#+<&қ�<W,��>��^�P�&n�Jh�e�%d������C�i�zX�A�'D�>��Έ�Ek���@�B�w(�.��\n99A�hN�c�kN��d`���p`��%2���\0");
    } else {
        header('Content-Type: image/gif');
        switch ($_GET['file']) {
            case 'plus.gif':echo "GIF89a\0\0�\0001���\0\0����\0\0\0!�\0\0\0,\0\0\0\0\0\0!�����M��*)�o��) q��e���#��L�\0;";
                break;
            case 'cross.gif':echo "GIF89a\0\0�\0001���\0\0����\0\0\0!�\0\0\0,\0\0\0\0\0\0#�����#\na�Fo~y�.�_wa��1�J�G�L�6]\0\0;";
                break;
            case 'up.gif':echo "GIF89a\0\0�\0001���\0\0����\0\0\0!�\0\0\0,\0\0\0\0\0\0 �����MQN\n�}��a8�y�aŶ�\0��\0;";
                break;
            case 'down.gif':echo "GIF89a\0\0�\0001���\0\0����\0\0\0!�\0\0\0,\0\0\0\0\0\0 �����M��*)�[W�\\��L&ٜƶ�\0��\0;";
                break;
            case 'arrow.gif':echo "GIF89a\0\n\0�\0\0������!�\0\0\0,\0\0\0\0\0\n\0\0�i������Ӳ޻\0\0;";
                break;
        }
    }exit;
}if ($_GET['script'] == 'version') {
    $p = file_open_lock(get_temp_dir().'/adminer.version');
    if ($p) {
        file_write_unlock($p, serialize(['signature' => $_POST['signature'], 'version' => $_POST['version']]));
    }exit;
}global $b,$e,$j,$Kb,$Rb,$bc,$k,$Fc,$Jc,$ba,$cd,$y,$ca,$sd,$oe,$Te,$jg,$Oc,$T,$Rg,$Xg,$eh,$ga;
if (! $_SERVER['REQUEST_URI']) {
    $_SERVER['REQUEST_URI'] = $_SERVER['ORIG_PATH_INFO'];
}if (! strpos($_SERVER['REQUEST_URI'], '?') && $_SERVER['QUERY_STRING'] != '') {
    $_SERVER['REQUEST_URI'] .= "?$_SERVER[QUERY_STRING]";
}if ($_SERVER['HTTP_X_FORWARDED_PREFIX']) {
    $_SERVER['REQUEST_URI'] = $_SERVER['HTTP_X_FORWARDED_PREFIX'].$_SERVER['REQUEST_URI'];
}$ba = ($_SERVER['HTTPS'] && strcasecmp($_SERVER['HTTPS'], 'off')) || ini_bool('session.cookie_secure');
@ini_set('session.use_trans_sid', false);
if (! defined('SID')) {
    session_cache_limiter('');
    session_name('adminer_sid');
    $Je = [0, preg_replace('~\?.*~', '', $_SERVER['REQUEST_URI']), '', $ba];
    if (version_compare(PHP_VERSION, '5.2.0') >= 0) {
        $Je[] = true;
    }call_user_func_array('session_set_cookie_params', $Je);
    session_start();
}remove_slashes([&$_GET, &$_POST, &$_COOKIE], $wc);
if (function_exists('get_magic_quotes_runtime') && get_magic_quotes_runtime()) {
    set_magic_quotes_runtime(false);
}@set_time_limit(0);
@ini_set('zend.ze1_compatibility_mode', false);
@ini_set('precision', 15);
function get_lang()
{
    return 'en';
}function lang($Qg, $fe = null)
{
    if (is_array($Qg)) {
        $We = ($fe == 1 ? 0 : 1);
        $Qg = $Qg[$We];
    }$Qg = str_replace('%d', '%s', $Qg);
    $fe = format_number($fe);

    return sprintf($Qg, $fe);
}if (extension_loaded('pdo')) {
    class Min_PDO
    {
        public $_result;

        public $server_infovar;

        public $affected_rowsvar;

        public $errnovar;

        public $errorvar;

        public $pdovar;

        public function __construct()
        {
            global $b;
            $We = array_search('SQL', $b->operators);
            if ($We !== false) {
                unset($b->operators[$We]);
            }
        }

        public function dsn($Ob, $V, $G, $ue = [])
        {
            $ue[PDO::ATTR_ERRMODE] = PDO::ERRMODE_SILENT;
            $ue[PDO::ATTR_STATEMENT_CLASS] = ['Min_PDOStatement'];
            try {
                $this->pdo = new PDO($Ob, $V, $G, $ue);
            } catch (Exception$hc) {
                auth_error(h($hc->getMessage()));
            }$this->server_info = @$this->pdo->getAttribute(PDO::ATTR_SERVER_VERSION);
        }

        public function quote($ig)
        {
            return $this->pdo->quote($ig);
        }

        public function query($I, $Yg = false)
        {
            $J = $this->pdo->query($I);
            $this->error = '';
            if (! $J) {
                [, $this->errno, $this->error] = $this->pdo->errorInfo();
                if (! $this->error) {
                    $this->error = 'Unknown error.';
                }

                return false;
            }$this->store_result($J);

            return $J;
        }

        public function multi_query($I)
        {
            return $this->_result = $this->query($I);
        }

        public function store_result($J = null)
        {
            if (! $J) {
                $J = $this->_result;
                if (! $J) {
                    return false;
                }
            }if ($J->columnCount()) {
                $J->num_rows = $J->rowCount();

                return $J;
            }$this->affected_rows = $J->rowCount();

            return true;
        }

        public function next_result()
        {
            if (! $this->_result) {
                return false;
            }$this->_result->_offset = 0;

            return @$this->_result->nextRowset();
        }

        public function result($I, $l = 0)
        {
            $J = $this->query($I);
            if (! $J) {
                return false;
            }$L = $J->fetch();

            return $L[$l];
        }
    }class Min_PDOStatement extends PDOStatement
    {
        public $_offset = 0;

        public $num_rowsvar;

        public function fetch_assoc()
        {
            return $this->fetch(PDO::FETCH_ASSOC);
        }

        public function fetch_row()
        {
            return $this->fetch(PDO::FETCH_NUM);
        }

        public function fetch_field()
        {
            $L = (object) $this->getColumnMeta($this->_offset++);
            $L->orgtable = $L->table;
            $L->orgname = $L->name;
            $L->charsetnr = (in_array('blob', (array) $L->flags) ? 63 : 0);

            return $L;
        }
    }
}$Kb = [];
function add_driver($u, $E)
{
    global $Kb;
    $Kb[$u] = $E;
}class Min_SQL
{
    public $_conn;

    public function __construct($e)
    {
        $this->_conn = $e;
    }

    public function select($Q, $N, $Z, $s, $we = [], $_ = 1, $F = 0, $df = false)
    {
        global $b,$y;
        $jd = (count($s) < count($N));
        $I = $b->selectQueryBuild($N, $Z, $s, $we, $_, $F);
        if (! $I) {
            $I = 'SELECT'.limit(($_GET['page'] != 'last' && $_ != '' && $s && $jd && $y == 'sql' ? 'SQL_CALC_FOUND_ROWS ' : '').implode(', ', $N)."\nFROM ".table($Q), ($Z ? "\nWHERE ".implode(' AND ', $Z) : '').($s && $jd ? "\nGROUP BY ".implode(', ', $s) : '').($we ? "\nORDER BY ".implode(', ', $we) : ''), ($_ != '' ? +$_ : null), ($F ? $_ * $F : 0), "\n");
        }$eg = microtime(true);
        $K = $this->_conn->query($I);
        if ($df) {
            echo $b->selectQuery($I, $eg, ! $K);
        }

        return $K;
    }

    public function delete($Q, $lf, $_ = 0)
    {
        $I = 'FROM '.table($Q);

        return queries('DELETE'.($_ ? limit1($Q, $I, $lf) : " $I$lf"));
    }

    public function update($Q, $P, $lf, $_ = 0, $Of = "\n")
    {
        $oh = [];
        foreach ($P as $z => $X) {
            $oh[] = "$z = $X";
        }$I = table($Q)." SET$Of".implode(",$Of", $oh);

        return queries('UPDATE'.($_ ? limit1($Q, $I, $lf, $Of) : " $I$lf"));
    }

    public function insert($Q, $P)
    {
        return queries('INSERT INTO '.table($Q).($P ? ' ('.implode(', ', array_keys($P)).")\nVALUES (".implode(', ', $P).')' : ' DEFAULT VALUES'));
    }

    public function insertUpdate($Q, $M, $cf)
    {
        return false;
    }

    public function begin()
    {
        return queries('BEGIN');
    }

    public function commit()
    {
        return queries('COMMIT');
    }

    public function rollback()
    {
        return queries('ROLLBACK');
    }

    public function slowQuery($I, $Eg) {}

    public function convertSearch($Wc, $X, $l)
    {
        return $Wc;
    }

    public function value($X, $l)
    {
        return method_exists($this->_conn, 'value') ? $this->_conn->value($X, $l) : (is_resource($X) ? stream_get_contents($X) : $X);
    }

    public function quoteBinary($Ff)
    {
        return q($Ff);
    }

    public function warnings()
    {
        return '';
    }

    public function tableHelp($E) {}
}class Adminer
{
    public $operators;

    public function name()
    {
        return "<a href='https://www.adminer.org/'".target_blank()." id='h1'>Adminer</a>";
    }

    public function credentials()
    {
        return [SERVER, $_GET['username'], get_password()];
    }

    public function connectSsl() {}

    public function permanentLogin($g = false)
    {
        return password_file($g);
    }

    public function bruteForceKey()
    {
        return $_SERVER['REMOTE_ADDR'];
    }

    public function serverName($O)
    {
        return h($O);
    }

    public function database()
    {
        return DB;
    }

    public function databases($yc = true)
    {
        return get_databases($yc);
    }

    public function schemas()
    {
        return schemas();
    }

    public function queryTimeout()
    {
        return 2;
    }

    public function headers() {}

    public function csp()
    {
        return csp();
    }

    public function head()
    {
        return true;
    }

    public function css()
    {
        $K = [];
        $vc = 'adminer.css';
        if (file_exists($vc)) {
            $K[] = "$vc?v=".crc32(file_get_contents($vc));
        }

        return $K;
    }

    public function loginForm()
    {
        global $Kb;
        echo "<table cellspacing='0' class='layout'>\n",$this->loginFormField('driver', '<tr><th>'.'System'.'<td>', html_select('auth[driver]', $Kb, DRIVER, 'loginDriver(this);')."\n"),$this->loginFormField('server', '<tr><th>'.'Server'.'<td>', '<input name="auth[server]" value="'.h(SERVER).'" title="hostname[:port]" placeholder="localhost" autocapitalize="off">'."\n"),$this->loginFormField('username', '<tr><th>'.'Username'.'<td>', '<input name="auth[username]" id="username" value="'.h($_GET['username']).'" autocomplete="username" autocapitalize="off">'.script("focus(qs('#username')); qs('#username').form['auth[driver]'].onchange();")),$this->loginFormField('password', '<tr><th>'.'Password'.'<td>', '<input type="password" name="auth[password]" autocomplete="current-password">'."\n"),$this->loginFormField('db', '<tr><th>'.'Database'.'<td>', '<input name="auth[db]" value="'.h($_GET['db']).'" autocapitalize="off">'."\n"),"</table>\n","<p><input type='submit' value='".'Login'."'>\n",checkbox('auth[permanent]', 1, $_COOKIE['adminer_permanent'], 'Permanent login')."\n";
    }

    public function loginFormField($E, $Qc, $Y)
    {
        return $Qc.$Y;
    }

    public function login($Cd, $G)
    {
        if ($G == '') {
            return sprintf('Adminer does not support accessing a database without a password, <a href="https://www.adminer.org/en/password/"%s>more information</a>.', target_blank());
        }

        return true;
    }

    public function tableName($qg)
    {
        return h($qg['Name']);
    }

    public function fieldName($l, $we = 0)
    {
        return '<span title="'.h($l['full_type']).'">'.h($l['field']).'</span>';
    }

    public function selectLinks($qg, $P = '')
    {
        global $y,$j;
        echo '<p class="links">';
        $Bd = ['select' => 'Select data'];
        if (support('table') || support('indexes')) {
            $Bd['table'] = 'Show structure';
        }if (support('table')) {
            if (is_view($qg)) {
                $Bd['view'] = 'Alter view';
            } else {
                $Bd['create'] = 'Alter table';
            }
        }if ($P !== null) {
            $Bd['edit'] = 'New item';
        }$E = $qg['Name'];
        foreach ($Bd as $z => $X) {
            echo " <a href='".h(ME)."$z=".urlencode($E).($z == 'edit' ? $P : '')."'".bold(isset($_GET[$z])).">$X</a>";
        }echo doc_link([$y => $j->tableHelp($E)], '?'),"\n";
    }

    public function foreignKeys($Q)
    {
        return foreign_keys($Q);
    }

    public function backwardKeys($Q, $pg)
    {
        return [];
    }

    public function backwardKeysPrint($Aa, $L) {}

    public function selectQuery($I, $eg, $qc = false)
    {
        global $y,$j;
        $K = "</p>\n";
        if (! $qc && ($wh = $j->warnings())) {
            $u = 'warnings';
            $K = ", <a href='#$u'>".'Warnings'.'</a>'.script("qsl('a').onclick = partial(toggle, '$u');", '')."$K<div id='$u' class='hidden'>\n$wh</div>\n";
        }

        return "<p><code class='jush-$y'>".h(str_replace("\n", ' ', $I))."</code> <span class='time'>(".format_time($eg).')</span>'.(support('sql') ? " <a href='".h(ME).'sql='.urlencode($I)."'>".'Edit'.'</a>' : '').$K;
    }

    public function sqlCommandQuery($I)
    {
        return shorten_utf8(trim($I), 1000);
    }

    public function rowDescription($Q)
    {
        return '';
    }

    public function rowDescriptions($M, $Ac)
    {
        return $M;
    }

    public function selectLink($X, $l) {}

    public function selectVal($X, $A, $l, $De)
    {
        $K = ($X === null ? '<i>NULL</i>' : (preg_match('~char|binary|boolean~', $l['type']) && ! preg_match('~var~', $l['type']) ? "<code>$X</code>" : $X));
        if (preg_match('~blob|bytea|raw|file~', $l['type']) && ! is_utf8($X)) {
            $K = '<i>'.lang(['%d byte', '%d bytes'], strlen($De)).'</i>';
        }if (preg_match('~json~', $l['type'])) {
            $K = "<code class='jush-js'>$K</code>";
        }

        return $A ? "<a href='".h($A)."'".(is_url($A) ? target_blank() : '').">$K</a>" : $K;
    }

    public function editVal($X, $l)
    {
        return $X;
    }

    public function tableStructurePrint($m)
    {
        echo "<div class='scrollable'>\n","<table cellspacing='0' class='nowrap'>\n",'<thead><tr><th>'.'Column'.'<td>'.'Type'.(support('comment') ? '<td>'.'Comment' : '')."</thead>\n";
        foreach ($m as $l) {
            echo '<tr'.odd().'><th>'.h($l['field']),"<td><span title='".h($l['collation'])."'>".h($l['full_type']).'</span>',($l['null'] ? ' <i>NULL</i>' : ''),($l['auto_increment'] ? ' <i>'.'Auto Increment'.'</i>' : ''),(isset($l['default']) ? " <span title='".'Default value'."'>[<b>".h($l['default']).'</b>]</span>' : ''),(support('comment') ? '<td>'.h($l['comment']) : ''),"\n";
        }echo "</table>\n","</div>\n";
    }

    public function tableIndexesPrint($w)
    {
        echo "<table cellspacing='0'>\n";
        foreach ($w as $E => $v) {
            ksort($v['columns']);
            $df = [];
            foreach ($v['columns'] as $z => $X) {
                $df[] = '<i>'.h($X).'</i>'.($v['lengths'][$z] ? '('.$v['lengths'][$z].')' : '').($v['descs'][$z] ? ' DESC' : '');
            }echo "<tr title='".h($E)."'><th>$v[type]<td>".implode(', ', $df)."\n";
        }echo "</table>\n";
    }

    public function selectColumnsPrint($N, $d)
    {
        global $Fc,$Jc;
        print_fieldset('select', 'Select', $N);
        $t = 0;
        $N[''] = [];
        foreach ($N as $z => $X) {
            $X = $_GET['columns'][$z];
            $c = select_input(" name='columns[$t][col]'", $d, $X['col'], ($z !== '' ? 'selectFieldChange' : 'selectAddRow'));
            echo '<div>'.($Fc || $Jc ? "<select name='columns[$t][fun]'>".optionlist([-1 => ''] + array_filter(['Functions' => $Fc, 'Aggregation' => $Jc]), $X['fun']).'</select>'.on_help("getTarget(event).value && getTarget(event).value.replace(/ |\$/, '(') + ')'", 1).script("qsl('select').onchange = function () { helpClose();".($z !== '' ? '' : " qsl('select, input', this.parentNode).onchange();").' };', '')."($c)" : $c)."</div>\n";
            $t++;
        }echo "</div></fieldset>\n";
    }

    public function selectSearchPrint($Z, $d, $w)
    {
        print_fieldset('search', 'Search', $Z);
        foreach ($w as $t => $v) {
            if ($v['type'] == 'FULLTEXT') {
                echo '<div>(<i>'.implode('</i>, <i>', array_map('h', $v['columns'])).'</i>) AGAINST'," <input type='search' name='fulltext[$t]' value='".h($_GET['fulltext'][$t])."'>",script("qsl('input').oninput = selectFieldChange;", ''),checkbox("boolean[$t]", 1, isset($_GET['boolean'][$t]), 'BOOL'),"</div>\n";
            }
        }$Ka = 'this.parentNode.firstChild.onchange();';
        foreach (array_merge((array) $_GET['where'], [[]]) as $t => $X) {
            if (! $X || ("$X[col]$X[val]" != '' && in_array($X['op'], $this->operators))) {
                echo '<div>'.select_input(" name='where[$t][col]'", $d, $X['col'], ($X ? 'selectFieldChange' : 'selectAddRow'), '('.'anywhere'.')'),html_select("where[$t][op]", $this->operators, $X['op'], $Ka),"<input type='search' name='where[$t][val]' value='".h($X['val'])."'>",script("mixin(qsl('input'), {oninput: function () { $Ka }, onkeydown: selectSearchKeydown, onsearch: selectSearchSearch});", ''),"</div>\n";
            }
        }echo "</div></fieldset>\n";
    }

    public function selectOrderPrint($we, $d, $w)
    {
        print_fieldset('sort', 'Sort', $we);
        $t = 0;
        foreach ((array) $_GET['order'] as $z => $X) {
            if ($X != '') {
                echo '<div>'.select_input(" name='order[$t]'", $d, $X, 'selectFieldChange'),checkbox("desc[$t]", 1, isset($_GET['desc'][$z]), 'descending')."</div>\n";
                $t++;
            }
        }echo '<div>'.select_input(" name='order[$t]'", $d, '', 'selectAddRow'),checkbox("desc[$t]", 1, false, 'descending')."</div>\n","</div></fieldset>\n";
    }

    public function selectLimitPrint($_)
    {
        echo '<fieldset><legend>'.'Limit'.'</legend><div>';
        echo "<input type='number' name='limit' class='size' value='".h($_)."'>",script("qsl('input').oninput = selectFieldChange;", ''),"</div></fieldset>\n";
    }

    public function selectLengthPrint($Cg)
    {
        if ($Cg !== null) {
            echo '<fieldset><legend>'.'Text length'.'</legend><div>',"<input type='number' name='text_length' class='size' value='".h($Cg)."'>","</div></fieldset>\n";
        }
    }

    public function selectActionPrint($w)
    {
        echo '<fieldset><legend>'.'Action'.'</legend><div>',"<input type='submit' value='".'Select'."'>"," <span id='noindex' title='".'Full table scan'."'></span>",'<script'.nonce().">\n",'var indexColumns = ';
        $d = [];
        foreach ($w as $v) {
            $rb = reset($v['columns']);
            if ($v['type'] != 'FULLTEXT' && $rb) {
                $d[$rb] = 1;
            }
        }$d[''] = 1;
        foreach ($d as $z => $X) {
            json_row($z);
        }echo ";\n","selectFieldChange.call(qs('#form')['select']);\n","</script>\n","</div></fieldset>\n";
    }

    public function selectCommandPrint()
    {
        return ! information_schema(DB);
    }

    public function selectImportPrint()
    {
        return ! information_schema(DB);
    }

    public function selectEmailPrint($Wb, $d) {}

    public function selectColumnsProcess($d, $w)
    {
        global $Fc,$Jc;
        $N = [];
        $s = [];
        foreach ((array) $_GET['columns'] as $z => $X) {
            if ($X['fun'] == 'count' || ($X['col'] != '' && (! $X['fun'] || in_array($X['fun'], $Fc) || in_array($X['fun'], $Jc)))) {
                $N[$z] = apply_sql_function($X['fun'], ($X['col'] != '' ? idf_escape($X['col']) : '*'));
                if (! in_array($X['fun'], $Jc)) {
                    $s[] = $N[$z];
                }
            }
        }

        return [$N, $s];
    }

    public function selectSearchProcess($m, $w)
    {
        global $e,$j;
        $K = [];
        foreach ($w as $t => $v) {
            if ($v['type'] == 'FULLTEXT' && $_GET['fulltext'][$t] != '') {
                $K[] = 'MATCH ('.implode(', ', array_map('idf_escape', $v['columns'])).') AGAINST ('.q($_GET['fulltext'][$t]).(isset($_GET['boolean'][$t]) ? ' IN BOOLEAN MODE' : '').')';
            }
        }foreach ((array) $_GET['where'] as $z => $X) {
            if ("$X[col]$X[val]" != '' && in_array($X['op'], $this->operators)) {
                $af = '';
                $db = " $X[op]";
                if (preg_match('~IN$~', $X['op'])) {
                    $Zc = process_length($X['val']);
                    $db .= ' '.($Zc != '' ? $Zc : '(NULL)');
                } elseif ($X['op'] == 'SQL') {
                    $db = " $X[val]";
                } elseif ($X['op'] == 'LIKE %%') {
                    $db = ' LIKE '.$this->processInput($m[$X['col']], "%$X[val]%");
                } elseif ($X['op'] == 'ILIKE %%') {
                    $db = ' ILIKE '.$this->processInput($m[$X['col']], "%$X[val]%");
                } elseif ($X['op'] == 'FIND_IN_SET') {
                    $af = "$X[op](".q($X['val']).', ';
                    $db = ')';
                } elseif (! preg_match('~NULL$~', $X['op'])) {
                    $db .= ' '.$this->processInput($m[$X['col']], $X['val']);
                }if ($X['col'] != '') {
                    $K[] = $af.$j->convertSearch(idf_escape($X['col']), $X, $m[$X['col']]).$db;
                } else {
                    $Ya = [];
                    foreach ($m as $E => $l) {
                        if ((preg_match('~^[-\d.'.(preg_match('~IN$~', $X['op']) ? ',' : '').']+$~', $X['val']) || ! preg_match('~'.number_type().'|bit~', $l['type'])) && (! preg_match("~[\x80-\xFF]~", $X['val']) || preg_match('~char|text|enum|set~', $l['type'])) && (! preg_match('~date|timestamp~', $l['type']) || preg_match('~^\d+-\d+-\d+~', $X['val']))) {
                            $Ya[] = $af.$j->convertSearch(idf_escape($E), $X, $l).$db;
                        }
                    }$K[] = ($Ya ? '('.implode(' OR ', $Ya).')' : '1 = 0');
                }
            }
        }

        return $K;
    }

    public function selectOrderProcess($m, $w)
    {
        $K = [];
        foreach ((array) $_GET['order'] as $z => $X) {
            if ($X != '') {
                $K[] = (preg_match('~^((COUNT\(DISTINCT |[A-Z0-9_]+\()(`(?:[^`]|``)+`|"(?:[^"]|"")+")\)|COUNT\(\*\))$~', $X) ? $X : idf_escape($X)).(isset($_GET['desc'][$z]) ? ' DESC' : '');
            }
        }

        return $K;
    }

    public function selectLimitProcess()
    {
        return isset($_GET['limit']) ? $_GET['limit'] : '50';
    }

    public function selectLengthProcess()
    {
        return isset($_GET['text_length']) ? $_GET['text_length'] : '100';
    }

    public function selectEmailProcess($Z, $Ac)
    {
        return false;
    }

    public function selectQueryBuild($N, $Z, $s, $we, $_, $F)
    {
        return '';
    }

    public function messageQuery($I, $Dg, $qc = false)
    {
        global $y,$j;
        restart_session();
        $Rc = &get_session('queries');
        if (! $Rc[$_GET['db']]) {
            $Rc[$_GET['db']] = [];
        }if (strlen($I) > 1e6) {
            $I = preg_replace('~[\x80-\xFF]+$~', '', substr($I, 0, 1e6))."\n…";
        }$Rc[$_GET['db']][] = [$I, time(), $Dg];
        $cg = 'sql-'.count($Rc[$_GET['db']]);
        $K = "<a href='#$cg' class='toggle'>".'SQL command'."</a>\n";
        if (! $qc && ($wh = $j->warnings())) {
            $u = 'warnings-'.count($Rc[$_GET['db']]);
            $K = "<a href='#$u' class='toggle'>".'Warnings'."</a>, $K<div id='$u' class='hidden'>\n$wh</div>\n";
        }

        return " <span class='time'>".@date('H:i:s').'</span>'." $K<div id='$cg' class='hidden'><pre><code class='jush-$y'>".shorten_utf8($I, 1000).'</code></pre>'.($Dg ? " <span class='time'>($Dg)</span>" : '').(support('sql') ? '<p><a href="'.h(str_replace('db='.urlencode(DB), 'db='.urlencode($_GET['db']), ME).'sql=&history='.(count($Rc[$_GET['db']]) - 1)).'">'.'Edit'.'</a>' : '').'</div>';
    }

    public function editRowPrint($Q, $m, $L, $fh) {}

    public function editFunctions($l)
    {
        global $Rb;
        $K = ($l['null'] ? 'NULL/' : '');
        $fh = isset($_GET['select']) || where($_GET);
        foreach ($Rb as $z => $Fc) {
            if (! $z || (! isset($_GET['call']) && $fh)) {
                foreach ($Fc as $Re => $X) {
                    if (! $Re || preg_match("~$Re~", $l['type'])) {
                        $K .= "/$X";
                    }
                }
            }if ($z && ! preg_match('~set|blob|bytea|raw|file|bool~', $l['type'])) {
                $K .= '/SQL';
            }
        }if ($l['auto_increment'] && ! $fh) {
            $K = 'Auto Increment';
        }

        return explode('/', $K);
    }

    public function editInput($Q, $l, $wa, $Y)
    {
        if ($l['type'] == 'enum') {
            return (isset($_GET['select']) ? "<label><input type='radio'$wa value='-1' checked><i>".'original'.'</i></label> ' : '').($l['null'] ? "<label><input type='radio'$wa value=''".($Y !== null || isset($_GET['select']) ? '' : ' checked').'><i>NULL</i></label> ' : '').enum_input('radio', $wa, $l, $Y, 0);
        }

        return '';
    }

    public function editHint($Q, $l, $Y)
    {
        return '';
    }

    public function processInput($l, $Y, $q = '')
    {
        if ($q == 'SQL') {
            return $Y;
        }$E = $l['field'];
        $K = q($Y);
        if (preg_match('~^(now|getdate|uuid)$~', $q)) {
            $K = "$q()";
        } elseif (preg_match('~^current_(date|timestamp)$~', $q)) {
            $K = $q;
        } elseif (preg_match('~^([+-]|\|\|)$~', $q)) {
            $K = idf_escape($E)." $q $K";
        } elseif (preg_match('~^[+-] interval$~', $q)) {
            $K = idf_escape($E)." $q ".(preg_match("~^(\\d+|'[0-9.: -]') [A-Z_]+\$~i", $Y) ? $Y : $K);
        } elseif (preg_match('~^(addtime|subtime|concat)$~', $q)) {
            $K = "$q(".idf_escape($E).", $K)";
        } elseif (preg_match('~^(md5|sha1|password|encrypt)$~', $q)) {
            $K = "$q($K)";
        }

        return unconvert_field($l, $K);
    }

    public function dumpOutput()
    {
        $K = ['text' => 'open', 'file' => 'save'];
        if (function_exists('gzencode')) {
            $K['gz'] = 'gzip';
        }

        return $K;
    }

    public function dumpFormat()
    {
        return ['sql' => 'SQL', 'csv' => 'CSV,', 'csv;' => 'CSV;', 'tsv' => 'TSV'];
    }

    public function dumpDatabase($i) {}

    public function dumpTable($Q, $kg, $ld = 0)
    {
        if ($_POST['format'] != 'sql') {
            echo "\xef\xbb\xbf";
            if ($kg) {
                dump_csv(array_keys(fields($Q)));
            }
        } else {
            if ($ld == 2) {
                $m = [];
                foreach (fields($Q) as $E => $l) {
                    $m[] = idf_escape($E)." $l[full_type]";
                }$g = 'CREATE TABLE '.table($Q).' ('.implode(', ', $m).')';
            } else {
                $g = create_sql($Q, $_POST['auto_increment'], $kg);
            }set_utf8mb4($g);
            if ($kg && $g) {
                if ($kg == 'DROP+CREATE' || $ld == 1) {
                    echo 'DROP '.($ld == 2 ? 'VIEW' : 'TABLE').' IF EXISTS '.table($Q).";\n";
                }if ($ld == 1) {
                    $g = remove_definer($g);
                }echo "$g;\n\n";
            }
        }
    }

    public function dumpData($Q, $kg, $I)
    {
        global $e,$y;
        $Id = ($y == 'sqlite' ? 0 : 1048576);
        if ($kg) {
            if ($_POST['format'] == 'sql') {
                if ($kg == 'TRUNCATE+INSERT') {
                    echo truncate_sql($Q).";\n";
                }$m = fields($Q);
            }$J = $e->query($I, 1);
            if ($J) {
                $ed = '';
                $Ia = '';
                $nd = [];
                $mg = '';
                $tc = ($Q != '' ? 'fetch_assoc' : 'fetch_row');
                while ($L = $J->$tc()) {
                    if (! $nd) {
                        $oh = [];
                        foreach ($L as $X) {
                            $l = $J->fetch_field();
                            $nd[] = $l->name;
                            $z = idf_escape($l->name);
                            $oh[] = "$z = VALUES($z)";
                        }$mg = ($kg == 'INSERT+UPDATE' ? "\nON DUPLICATE KEY UPDATE ".implode(', ', $oh) : '').";\n";
                    }if ($_POST['format'] != 'sql') {
                        if ($kg == 'table') {
                            dump_csv($nd);
                            $kg = 'INSERT';
                        }dump_csv($L);
                    } else {
                        if (! $ed) {
                            $ed = 'INSERT INTO '.table($Q).' ('.implode(', ', array_map('idf_escape', $nd)).') VALUES';
                        }foreach ($L as $z => $X) {
                            $l = $m[$z];
                            $L[$z] = ($X !== null ? unconvert_field($l, preg_match(number_type(), $l['type']) && ! preg_match('~\[~', $l['full_type']) && is_numeric($X) ? $X : q(($X === false ? 0 : $X))) : 'NULL');
                        }$Ff = ($Id ? "\n" : ' ').'('.implode(",\t", $L).')';
                        if (! $Ia) {
                            $Ia = $ed.$Ff;
                        } elseif (strlen($Ia) + 4 + strlen($Ff) + strlen($mg) < $Id) {
                            $Ia .= ",$Ff";
                        } else {
                            echo $Ia.$mg;
                            $Ia = $ed.$Ff;
                        }
                    }
                }if ($Ia) {
                    echo $Ia.$mg;
                }
            } elseif ($_POST['format'] == 'sql') {
                echo '-- '.str_replace("\n", ' ', $e->error)."\n";
            }
        }
    }

    public function dumpFilename($Vc)
    {
        return friendly_url($Vc != '' ? $Vc : (SERVER != '' ? SERVER : 'localhost'));
    }

    public function dumpHeaders($Vc, $Ud = false)
    {
        $Fe = $_POST['output'];
        $nc = (preg_match('~sql~', $_POST['format']) ? 'sql' : ($Ud ? 'tar' : 'csv'));
        header('Content-Type: '.($Fe == 'gz' ? 'application/x-gzip' : ($nc == 'tar' ? 'application/x-tar' : ($nc == 'sql' || $Fe != 'file' ? 'text/plain' : 'text/csv').'; charset=utf-8')));
        if ($Fe == 'gz') {
            ob_start('ob_gzencode', 1e6);
        }

        return $nc;
    }

    public function importServerPath()
    {
        return 'adminer.sql';
    }

    public function homepage()
    {
        echo '<p class="links">'.($_GET['ns'] == '' && support('database') ? '<a href="'.h(ME).'database=">'.'Alter database'."</a>\n" : ''),(support('scheme') ? "<a href='".h(ME)."scheme='>".($_GET['ns'] != '' ? 'Alter schema' : 'Create schema')."</a>\n" : ''),($_GET['ns'] !== '' ? '<a href="'.h(ME).'schema=">'.'Database schema'."</a>\n" : ''),(support('privileges') ? "<a href='".h(ME)."privileges='>".'Privileges'."</a>\n" : '');

        return true;
    }

    public function navigation($Td)
    {
        global $ga,$y,$Kb,$e;
        echo '<h1>
',$this->name(),' <span class="version">',$ga,'</span>
<a href="https://www.adminer.org/#download"',target_blank(),' id="version">',(version_compare($ga, $_COOKIE['adminer_version']) < 0 ? h($_COOKIE['adminer_version']) : ''),'</a>
</h1>
';
        if ($Td == 'auth') {
            $Fe = '';
            foreach ((array) $_SESSION['pwds'] as $qh => $Qf) {
                foreach ($Qf as $O => $mh) {
                    foreach ($mh as $V => $G) {
                        if ($G !== null) {
                            $xb = $_SESSION['db'][$qh][$O][$V];
                            foreach (($xb ? array_keys($xb) : ['']) as $i) {
                                $Fe .= "<li><a href='".h(auth_url($qh, $O, $V, $i))."'>($Kb[$qh]) ".h($V.($O != '' ? '@'.$this->serverName($O) : '').($i != '' ? " - $i" : ''))."</a>\n";
                            }
                        }
                    }
                }
            }if ($Fe) {
                echo "<ul id='logins'>\n$Fe</ul>\n".script("mixin(qs('#logins'), {onmouseover: menuOver, onmouseout: menuOut});");
            }
        } else {
            $S = [];
            if ($_GET['ns'] !== '' && ! $Td && DB != '') {
                $e->select_db(DB);
                $S = table_status('', true);
            }echo script_src(preg_replace('~\\?.*~', '', ME).'?file=jush.js&version=4.8.1');
            if (support('sql')) {
                echo '<script',nonce(),'>
';
                if ($S) {
                    $Bd = [];
                    foreach ($S as $Q => $U) {
                        $Bd[] = preg_quote($Q, '/');
                    }echo "var jushLinks = { $y: [ '".js_escape(ME).(support('table') ? 'table=' : 'select=')."\$&', /\\b(".implode('|', $Bd).")\\b/g ] };\n";
                    foreach (['bac', 'bra', 'sqlite_quo', 'mssql_bra'] as $X) {
                        echo "jushLinks.$X = jushLinks.$y;\n";
                    }
                }$Pf = $e->server_info;
                echo 'bodyLoad(\'',(is_object($e) ? preg_replace('~^(\d\.?\d).*~s', '\1', $Pf) : ''),'\'',(preg_match('~MariaDB~', $Pf) ? ', true' : ''),');
</script>
';
            }$this->databasesPrint($Td);
            if (DB == '' || ! $Td) {
                echo "<p class='links'>".(support('sql') ? "<a href='".h(ME)."sql='".bold(isset($_GET['sql']) && ! isset($_GET['import'])).'>'.'SQL command'."</a>\n<a href='".h(ME)."import='".bold(isset($_GET['import'])).'>'.'Import'."</a>\n" : '').'';
                if (support('dump')) {
                    echo "<a href='".h(ME).'dump='.urlencode(isset($_GET['table']) ? $_GET['table'] : $_GET['select'])."' id='dump'".bold(isset($_GET['dump'])).'>'.'Export'."</a>\n";
                }
            }if ($_GET['ns'] !== '' && ! $Td && DB != '') {
                echo '<a href="'.h(ME).'create="'.bold($_GET['create'] === '').'>'.'Create table'."</a>\n";
                if (! $S) {
                    echo "<p class='message'>".'No tables.'."\n";
                } else {
                    $this->tablesPrint($S);
                }
            }
        }
    }

    public function databasesPrint($Td)
    {
        global $b,$e;
        $h = $this->databases();
        if (DB && $h && ! in_array(DB, $h)) {
            array_unshift($h, DB);
        }echo '<form action="">
<p id="dbs">
';
        hidden_fields_get();
        $vb = script("mixin(qsl('select'), {onmousedown: dbMouseDown, onchange: dbChange});");
        echo "<span title='".'database'."'>".'DB'.'</span>: '.($h ? "<select name='db'>".optionlist(['' => ''] + $h, DB)."</select>$vb" : "<input name='db' value='".h(DB)."' autocapitalize='off'>\n"),"<input type='submit' value='".'Use'."'".($h ? " class='hidden'" : '').">\n";
        foreach (['import', 'sql', 'schema', 'dump', 'privileges'] as $X) {
            if (isset($_GET[$X])) {
                echo "<input type='hidden' name='$X' value=''>";
                break;
            }
        }echo "</p></form>\n";
    }

    public function tablesPrint($S)
    {
        echo "<ul id='tables'>".script("mixin(qs('#tables'), {onmouseover: menuOver, onmouseout: menuOut});");
        foreach ($S as $Q => $fg) {
            $E = $this->tableName($fg);
            if ($E != '') {
                echo '<li><a href="'.h(ME).'select='.urlencode($Q).'"'.bold($_GET['select'] == $Q || $_GET['edit'] == $Q, 'select')." title='".'Select data'."'>".'select'.'</a> ',(support('table') || support('indexes') ? '<a href="'.h(ME).'table='.urlencode($Q).'"'.bold(in_array($Q, [$_GET['table'], $_GET['create'], $_GET['indexes'], $_GET['foreign'], $_GET['trigger']]), (is_view($fg) ? 'view' : 'structure'))." title='".'Show structure'."'>$E</a>" : "<span>$E</span>")."\n";
            }
        }echo "</ul>\n";
    }
}$b = (function_exists('adminer_object') ? adminer_object() : new Adminer);
$Kb = ['server' => 'MySQL'] + $Kb;
if (! defined('DRIVER')) {
    define('DRIVER', 'server');
    if (extension_loaded('mysqli')) {
        class Min_DB extends MySQLi
        {
            public $extension = 'MySQLi';

            public function __construct()
            {
                parent::init();
            }

            public function connect($O = '', $V = '', $G = '', $ub = null, $Ve = null, $Xf = null)
            {
                global $b;
                mysqli_report(MYSQLI_REPORT_OFF);
                [$Tc, $Ve] = explode(':', $O, 2);
                $dg = $b->connectSsl();
                if ($dg) {
                    $this->ssl_set($dg['key'], $dg['cert'], $dg['ca'], '', '');
                }$K = @$this->real_connect(($O != '' ? $Tc : ini_get('mysqli.default_host')), ($O.$V != '' ? $V : ini_get('mysqli.default_user')), ($O.$V.$G != '' ? $G : ini_get('mysqli.default_pw')), $ub, (is_numeric($Ve) ? $Ve : ini_get('mysqli.default_port')), (! is_numeric($Ve) ? $Ve : $Xf), ($dg ? 64 : 0));
                $this->options(MYSQLI_OPT_LOCAL_INFILE, false);

                return $K;
            }

            public function set_charset($La)
            {
                if (parent::set_charset($La)) {
                    return true;
                }parent::set_charset('utf8');

                return $this->query("SET NAMES $La");
            }

            public function result($I, $l = 0)
            {
                $J = $this->query($I);
                if (! $J) {
                    return false;
                }$L = $J->fetch_array();

                return $L[$l];
            }

            public function quote($ig)
            {
                return "'".$this->escape_string($ig)."'";
            }
        }
    } elseif (extension_loaded('mysql') && ! ((ini_bool('sql.safe_mode') || ini_bool('mysql.allow_local_infile')) && extension_loaded('pdo_mysql'))) {
        class Min_DB
        {
            public $extension = 'MySQL';

            public $server_infovar;

            public $affected_rowsvar;

            public $errnovar;

            public $errorvar;

            public $_linkvar;

            public $_resultvar;

            public function connect($O, $V, $G)
            {
                if (ini_bool('mysql.allow_local_infile')) {
                    $this->error = sprintf('Disable %s or enable %s or %s extensions.', "'mysql.allow_local_infile'", 'MySQLi', 'PDO_MySQL');

                    return false;
                }$this->_link = @mysql_connect(($O != '' ? $O : ini_get('mysql.default_host')), ("$O$V" != '' ? $V : ini_get('mysql.default_user')), ("$O$V$G" != '' ? $G : ini_get('mysql.default_password')), true, 131072);
                if ($this->_link) {
                    $this->server_info = mysql_get_server_info($this->_link);
                } else {
                    $this->error = mysql_error();
                }

                return (bool) $this->_link;
            }

            public function set_charset($La)
            {
                if (function_exists('mysql_set_charset')) {
                    if (mysql_set_charset($La, $this->_link)) {
                        return true;
                    }mysql_set_charset('utf8', $this->_link);
                }

                return $this->query("SET NAMES $La");
            }

            public function quote($ig)
            {
                return "'".mysql_real_escape_string($ig, $this->_link)."'";
            }

            public function select_db($ub)
            {
                return mysql_select_db($ub, $this->_link);
            }

            public function query($I, $Yg = false)
            {
                $J = @($Yg ? mysql_unbuffered_query($I, $this->_link) : mysql_query($I, $this->_link));
                $this->error = '';
                if (! $J) {
                    $this->errno = mysql_errno($this->_link);
                    $this->error = mysql_error($this->_link);

                    return false;
                }if ($J === true) {
                    $this->affected_rows = mysql_affected_rows($this->_link);
                    $this->info = mysql_info($this->_link);

                    return true;
                }

                return new Min_Result($J);
            }

            public function multi_query($I)
            {
                return $this->_result = $this->query($I);
            }

            public function store_result()
            {
                return $this->_result;
            }

            public function next_result()
            {
                return false;
            }

            public function result($I, $l = 0)
            {
                $J = $this->query($I);
                if (! $J || ! $J->num_rows) {
                    return false;
                }

                return mysql_result($J->_result, 0, $l);
            }
        }class Min_Result
        {
            public $num_rows;

            public $_resultvar;

            public $_offsetvar = 0;

            public function __construct($J)
            {
                $this->_result = $J;
                $this->num_rows = mysql_num_rows($J);
            }

            public function fetch_assoc()
            {
                return mysql_fetch_assoc($this->_result);
            }

            public function fetch_row()
            {
                return mysql_fetch_row($this->_result);
            }

            public function fetch_field()
            {
                $K = mysql_fetch_field($this->_result, $this->_offset++);
                $K->orgtable = $K->table;
                $K->orgname = $K->name;
                $K->charsetnr = ($K->blob ? 63 : 0);

                return $K;
            }

            public function __destruct()
            {
                mysql_free_result($this->_result);
            }
        }
    } elseif (extension_loaded('pdo_mysql')) {
        class Min_DB extends Min_PDO
        {
            public $extension = 'PDO_MySQL';

            public function connect($O, $V, $G)
            {
                global $b;
                $ue = [PDO::MYSQL_ATTR_LOCAL_INFILE => false];
                $dg = $b->connectSsl();
                if ($dg) {
                    if (! empty($dg['key'])) {
                        $ue[PDO::MYSQL_ATTR_SSL_KEY] = $dg['key'];
                    }if (! empty($dg['cert'])) {
                        $ue[PDO::MYSQL_ATTR_SSL_CERT] = $dg['cert'];
                    }if (! empty($dg['ca'])) {
                        $ue[PDO::MYSQL_ATTR_SSL_CA] = $dg['ca'];
                    }
                }$this->dsn('mysql:charset=utf8;host='.str_replace(':', ';unix_socket=', preg_replace('~:(\d)~', ';port=\1', $O)), $V, $G, $ue);

                return true;
            }

            public function set_charset($La)
            {
                $this->query("SET NAMES $La");
            }

            public function select_db($ub)
            {
                return $this->query('USE '.idf_escape($ub));
            }

            public function query($I, $Yg = false)
            {
                $this->pdo->setAttribute(PDO::MYSQL_ATTR_USE_BUFFERED_QUERY, ! $Yg);

                return parent::query($I, $Yg);
            }
        }
    }class Min_Driver extends Min_SQL
    {
        public function insert($Q, $P)
        {
            return $P ? parent::insert($Q, $P) : queries('INSERT INTO '.table($Q)." ()\nVALUES ()");
        }

        public function insertUpdate($Q, $M, $cf)
        {
            $d = array_keys(reset($M));
            $af = 'INSERT INTO '.table($Q).' ('.implode(', ', $d).") VALUES\n";
            $oh = [];
            foreach ($d as $z) {
                $oh[$z] = "$z = VALUES($z)";
            }$mg = "\nON DUPLICATE KEY UPDATE ".implode(', ', $oh);
            $oh = [];
            $zd = 0;
            foreach ($M as $P) {
                $Y = '('.implode(', ', $P).')';
                if ($oh && (strlen($af) + $zd + strlen($Y) + strlen($mg) > 1e6)) {
                    if (! queries($af.implode(",\n", $oh).$mg)) {
                        return false;
                    }$oh = [];
                    $zd = 0;
                }$oh[] = $Y;
                $zd += strlen($Y) + 2;
            }

            return queries($af.implode(",\n", $oh).$mg);
        }

        public function slowQuery($I, $Eg)
        {
            if (min_version('5.7.8', '10.1.2')) {
                if (preg_match('~MariaDB~', $this->_conn->server_info)) {
                    return "SET STATEMENT max_statement_time=$Eg FOR $I";
                } elseif (preg_match('~^(SELECT\b)(.+)~is', $I, $C)) {
                    return "$C[1] /*+ MAX_EXECUTION_TIME(".($Eg * 1000).") */ $C[2]";
                }
            }
        }

        public function convertSearch($Wc, $X, $l)
        {
            return preg_match('~char|text|enum|set~', $l['type']) && ! preg_match('~^utf8~', $l['collation']) && preg_match('~[\x80-\xFF]~', $X['val']) ? "CONVERT($Wc USING ".charset($this->_conn).')' : $Wc;
        }

        public function warnings()
        {
            $J = $this->_conn->query('SHOW WARNINGS');
            if ($J && $J->num_rows) {
                ob_start();
                select($J);

                return ob_get_clean();
            }
        }

        public function tableHelp($E)
        {
            $Ed = preg_match('~MariaDB~', $this->_conn->server_info);
            if (information_schema(DB)) {
                return strtolower(($Ed ? "information-schema-$E-table/" : str_replace('_', '-', $E).'-table.html'));
            }if (DB == 'mysql') {
                return $Ed ? "mysql$E-table/" : 'system-database.html';
            }
        }
    }function idf_escape($Wc)
    {
        return '`'.str_replace('`', '``', $Wc).'`';
    }function table($Wc)
    {
        return idf_escape($Wc);
    }function connect()
    {
        global $b,$Xg,$jg;
        $e = new Min_DB;
        $nb = $b->credentials();
        if ($e->connect($nb[0], $nb[1], $nb[2])) {
            $e->set_charset(charset($e));
            $e->query('SET sql_quote_show_create = 1, autocommit = 1');
            if (min_version('5.7.8', 10.2, $e)) {
                $jg['Strings'][] = 'json';
                $Xg['json'] = 4294967295;
            }

            return $e;
        }$K = $e->error;
        if (function_exists('iconv') && ! is_utf8($K) && strlen($Ff = iconv('windows-1250', 'utf-8', $K)) > strlen($K)) {
            $K = $Ff;
        }

        return $K;
    }function get_databases($yc)
    {
        $K = get_session('dbs');
        if ($K === null) {
            $I = (min_version(5) ? 'SELECT SCHEMA_NAME FROM information_schema.SCHEMATA ORDER BY SCHEMA_NAME' : 'SHOW DATABASES');
            $K = ($yc ? slow_query($I) : get_vals($I));
            restart_session();
            set_session('dbs', $K);
            stop_session();
        }

        return $K;
    }function limit($I, $Z, $_, $he = 0, $Of = ' ')
    {
        return " $I$Z".($_ !== null ? $Of."LIMIT $_".($he ? " OFFSET $he" : '') : '');
    }function limit1($Q, $I, $Z, $Of = "\n")
    {
        return limit($I, $Z, 1, 0, $Of);
    }function db_collation($i, $Xa)
    {
        global $e;
        $K = null;
        $g = $e->result('SHOW CREATE DATABASE '.idf_escape($i), 1);
        if (preg_match('~ COLLATE ([^ ]+)~', $g, $C)) {
            $K = $C[1];
        } elseif (preg_match('~ CHARACTER SET ([^ ]+)~', $g, $C)) {
            $K = $Xa[$C[1]][-1];
        }

        return $K;
    }function engines()
    {
        $K = [];
        foreach (get_rows('SHOW ENGINES') as $L) {
            if (preg_match('~YES|DEFAULT~', $L['Support'])) {
                $K[] = $L['Engine'];
            }
        }

        return $K;
    }function logged_user()
    {
        global $e;

        return $e->result('SELECT USER()');
    }function tables_list()
    {
        return get_key_vals(min_version(5) ? 'SELECT TABLE_NAME, TABLE_TYPE FROM information_schema.TABLES WHERE TABLE_SCHEMA = DATABASE() ORDER BY TABLE_NAME' : 'SHOW TABLES');
    }function count_tables($h)
    {
        $K = [];
        foreach ($h as $i) {
            $K[$i] = count(get_vals('SHOW TABLES IN '.idf_escape($i)));
        }

        return $K;
    }function table_status($E = '', $rc = false)
    {
        $K = [];
        foreach (get_rows($rc && min_version(5) ? 'SELECT TABLE_NAME AS Name, ENGINE AS Engine, TABLE_COMMENT AS Comment FROM information_schema.TABLES WHERE TABLE_SCHEMA = DATABASE() '.($E != '' ? 'AND TABLE_NAME = '.q($E) : 'ORDER BY Name') : 'SHOW TABLE STATUS'.($E != '' ? ' LIKE '.q(addcslashes($E, '%_\\')) : '')) as $L) {
            if ($L['Engine'] == 'InnoDB') {
                $L['Comment'] = preg_replace('~(?:(.+); )?InnoDB free: .*~', '\1', $L['Comment']);
            }if (! isset($L['Engine'])) {
                $L['Comment'] = '';
            }if ($E != '') {
                return $L;
            }$K[$L['Name']] = $L;
        }

        return $K;
    }function is_view($R)
    {
        return $R['Engine'] === null;
    }function fk_support($R)
    {
        return preg_match('~InnoDB|IBMDB2I~i', $R['Engine']) || (preg_match('~NDB~i', $R['Engine']) && min_version(5.6));
    }function fields($Q)
    {
        $K = [];
        foreach (get_rows('SHOW FULL COLUMNS FROM '.table($Q)) as $L) {
            preg_match('~^([^( ]+)(?:\((.+)\))?( unsigned)?( zerofill)?$~', $L['Type'], $C);
            $K[$L['Field']] = ['field' => $L['Field'], 'full_type' => $L['Type'], 'type' => $C[1], 'length' => $C[2], 'unsigned' => ltrim($C[3].$C[4]), 'default' => ($L['Default'] != '' || preg_match('~char|set~', $C[1]) ? (preg_match('~text~', $C[1]) ? stripslashes(preg_replace("~^'(.*)'\$~", '\1', $L['Default'])) : $L['Default']) : null), 'null' => ($L['Null'] == 'YES'), 'auto_increment' => ($L['Extra'] == 'auto_increment'), 'on_update' => (preg_match('~^on update (.+)~i', $L['Extra'], $C) ? $C[1] : ''), 'collation' => $L['Collation'], 'privileges' => array_flip(preg_split('~, *~', $L['Privileges'])), 'comment' => $L['Comment'], 'primary' => ($L['Key'] == 'PRI'), 'generated' => preg_match('~^(VIRTUAL|PERSISTENT|STORED)~', $L['Extra'])];
        }

        return $K;
    }function indexes($Q, $f = null)
    {
        $K = [];
        foreach (get_rows('SHOW INDEX FROM '.table($Q), $f) as $L) {
            $E = $L['Key_name'];
            $K[$E]['type'] = ($E == 'PRIMARY' ? 'PRIMARY' : ($L['Index_type'] == 'FULLTEXT' ? 'FULLTEXT' : ($L['Non_unique'] ? ($L['Index_type'] == 'SPATIAL' ? 'SPATIAL' : 'INDEX') : 'UNIQUE')));
            $K[$E]['columns'][] = $L['Column_name'];
            $K[$E]['lengths'][] = ($L['Index_type'] == 'SPATIAL' ? null : $L['Sub_part']);
            $K[$E]['descs'][] = null;
        }

        return $K;
    }function foreign_keys($Q)
    {
        global $e,$oe;
        static $Re = '(?:`(?:[^`]|``)+`|"(?:[^"]|"")+")';
        $K = [];
        $lb = $e->result('SHOW CREATE TABLE '.table($Q), 1);
        if ($lb) {
            preg_match_all("~CONSTRAINT ($Re) FOREIGN KEY ?\\(((?:$Re,? ?)+)\\) REFERENCES ($Re)(?:\\.($Re))? \\(((?:$Re,? ?)+)\\)(?: ON DELETE ($oe))?(?: ON UPDATE ($oe))?~", $lb, $Gd, PREG_SET_ORDER);
            foreach ($Gd as $C) {
                preg_match_all("~$Re~", $C[2], $Yf);
                preg_match_all("~$Re~", $C[5], $yg);
                $K[idf_unescape($C[1])] = ['db' => idf_unescape($C[4] != '' ? $C[3] : $C[4]), 'table' => idf_unescape($C[4] != '' ? $C[4] : $C[3]), 'source' => array_map('idf_unescape', $Yf[0]), 'target' => array_map('idf_unescape', $yg[0]), 'on_delete' => ($C[6] ? $C[6] : 'RESTRICT'), 'on_update' => ($C[7] ? $C[7] : 'RESTRICT')];
            }
        }

        return $K;
    }function view($E)
    {
        global $e;

        return ['select' => preg_replace('~^(?:[^`]|`[^`]*`)*\s+AS\s+~isU', '', $e->result('SHOW CREATE VIEW '.table($E), 1))];
    }function collations()
    {
        $K = [];
        foreach (get_rows('SHOW COLLATION') as $L) {
            if ($L['Default']) {
                $K[$L['Charset']][-1] = $L['Collation'];
            } else {
                $K[$L['Charset']][] = $L['Collation'];
            }
        }ksort($K);
        foreach ($K as $z => $X) {
            asort($K[$z]);
        }

        return $K;
    }function information_schema($i)
    {
        return (min_version(5) && $i == 'information_schema') || (min_version(5.5) && $i == 'performance_schema');
    }function error()
    {
        global $e;

        return h(preg_replace('~^You have an error.*syntax to use~U', 'Syntax error', $e->error));
    }function create_database($i, $Wa)
    {
        return queries('CREATE DATABASE '.idf_escape($i).($Wa ? ' COLLATE '.q($Wa) : ''));
    }function drop_databases($h)
    {
        $K = apply_queries('DROP DATABASE', $h, 'idf_escape');
        restart_session();
        set_session('dbs', null);

        return $K;
    }function rename_database($E, $Wa)
    {
        $K = false;
        if (create_database($E, $Wa)) {
            $S = [];
            $th = [];
            foreach (tables_list() as $Q => $U) {
                if ($U == 'VIEW') {
                    $th[] = $Q;
                } else {
                    $S[] = $Q;
                }
            }$K = (! $S && ! $th) || move_tables($S, $th, $E);
            drop_databases($K ? [DB] : []);
        }

        return $K;
    }function auto_increment()
    {
        $za = ' PRIMARY KEY';
        if ($_GET['create'] != '' && $_POST['auto_increment_col']) {
            foreach (indexes($_GET['create']) as $v) {
                if (in_array($_POST['fields'][$_POST['auto_increment_col']]['orig'], $v['columns'], true)) {
                    $za = '';
                    break;
                }if ($v['type'] == 'PRIMARY') {
                    $za = ' UNIQUE';
                }
            }
        }

        return " AUTO_INCREMENT$za";
    }function alter_table($Q, $E, $m, $_c, $bb, $Zb, $Wa, $ya, $Ne)
    {
        $sa = [];
        foreach ($m as $l) {
            $sa[] = ($l[1] ? ($Q != '' ? ($l[0] != '' ? 'CHANGE '.idf_escape($l[0]) : 'ADD') : ' ').' '.implode($l[1]).($Q != '' ? $l[2] : '') : 'DROP '.idf_escape($l[0]));
        }$sa = array_merge($sa, $_c);
        $fg = ($bb !== null ? ' COMMENT='.q($bb) : '').($Zb ? ' ENGINE='.q($Zb) : '').($Wa ? ' COLLATE '.q($Wa) : '').($ya != '' ? " AUTO_INCREMENT=$ya" : '');
        if ($Q == '') {
            return queries('CREATE TABLE '.table($E)." (\n".implode(",\n", $sa)."\n)$fg$Ne");
        }if ($Q != $E) {
            $sa[] = 'RENAME TO '.table($E);
        }if ($fg) {
            $sa[] = ltrim($fg);
        }

        return $sa || $Ne ? queries('ALTER TABLE '.table($Q)."\n".implode(",\n", $sa).$Ne) : true;
    }function alter_indexes($Q, $sa)
    {
        foreach ($sa as $z => $X) {
            $sa[$z] = ($X[2] == 'DROP' ? "\nDROP INDEX ".idf_escape($X[1]) : "\nADD $X[0] ".($X[0] == 'PRIMARY' ? 'KEY ' : '').($X[1] != '' ? idf_escape($X[1]).' ' : '').'('.implode(', ', $X[2]).')');
        }

        return queries('ALTER TABLE '.table($Q).implode(',', $sa));
    }function truncate_tables($S)
    {
        return apply_queries('TRUNCATE TABLE', $S);
    }function drop_views($th)
    {
        return queries('DROP VIEW '.implode(', ', array_map('table', $th)));
    }function drop_tables($S)
    {
        return queries('DROP TABLE '.implode(', ', array_map('table', $S)));
    }function move_tables($S, $th, $yg)
    {
        global $e;
        $wf = [];
        foreach ($S as $Q) {
            $wf[] = table($Q).' TO '.idf_escape($yg).'.'.table($Q);
        }if (! $wf || queries('RENAME TABLE '.implode(', ', $wf))) {
            $Bb = [];
            foreach ($th as $Q) {
                $Bb[table($Q)] = view($Q);
            }$e->select_db($yg);
            $i = idf_escape(DB);
            foreach ($Bb as $E => $sh) {
                if (! queries("CREATE VIEW $E AS ".str_replace(" $i.", ' ', $sh['select'])) || ! queries("DROP VIEW $i.$E")) {
                    return false;
                }
            }

            return true;
        }

        return false;
    }function copy_tables($S, $th, $yg)
    {
        queries("SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO'");
        foreach ($S as $Q) {
            $E = ($yg == DB ? table("copy_$Q") : idf_escape($yg).'.'.table($Q));
            if (($_POST['overwrite'] && ! queries("\nDROP TABLE IF EXISTS $E")) || ! queries("CREATE TABLE $E LIKE ".table($Q)) || ! queries("INSERT INTO $E SELECT * FROM ".table($Q))) {
                return false;
            }foreach (get_rows('SHOW TRIGGERS LIKE '.q(addcslashes($Q, '%_\\'))) as $L) {
                $Sg = $L['Trigger'];
                if (! queries('CREATE TRIGGER '.($yg == DB ? idf_escape("copy_$Sg") : idf_escape($yg).'.'.idf_escape($Sg))." $L[Timing] $L[Event] ON $E FOR EACH ROW\n$L[Statement];")) {
                    return false;
                }
            }
        }foreach ($th as $Q) {
            $E = ($yg == DB ? table("copy_$Q") : idf_escape($yg).'.'.table($Q));
            $sh = view($Q);
            if (($_POST['overwrite'] && ! queries("DROP VIEW IF EXISTS $E")) || ! queries("CREATE VIEW $E AS $sh[select]")) {
                return false;
            }
        }

        return true;
    }function trigger($E)
    {
        if ($E == '') {
            return [];
        }$M = get_rows('SHOW TRIGGERS WHERE `Trigger` = '.q($E));

        return reset($M);
    }function triggers($Q)
    {
        $K = [];
        foreach (get_rows('SHOW TRIGGERS LIKE '.q(addcslashes($Q, '%_\\'))) as $L) {
            $K[$L['Trigger']] = [$L['Timing'], $L['Event']];
        }

        return $K;
    }function trigger_options()
    {
        return ['Timing' => ['BEFORE', 'AFTER'], 'Event' => ['INSERT', 'UPDATE', 'DELETE'], 'Type' => ['FOR EACH ROW']];
    }function routine($E, $U)
    {
        global $e,$bc,$cd,$Xg;
        $qa = ['bool', 'boolean', 'integer', 'double precision', 'real', 'dec', 'numeric', 'fixed', 'national char', 'national varchar'];
        $Zf = "(?:\\s|/\\*[\s\S]*?\\*/|(?:#|-- )[^\n]*\n?|--\r?\n)";
        $Wg = '(('.implode('|', array_merge(array_keys($Xg), $qa)).")\\b(?:\\s*\\(((?:[^'\")]|$bc)++)\\))?\\s*(zerofill\\s*)?(unsigned(?:\\s+zerofill)?)?)(?:\\s*(?:CHARSET|CHARACTER\\s+SET)\\s*['\"]?([^'\"\\s,]+)['\"]?)?";
        $Re = "$Zf*(".($U == 'FUNCTION' ? '' : $cd).")?\\s*(?:`((?:[^`]|``)*)`\\s*|\\b(\\S+)\\s+)$Wg";
        $g = $e->result("SHOW CREATE $U ".idf_escape($E), 2);
        preg_match("~\\(((?:$Re\\s*,?)*)\\)\\s*".($U == 'FUNCTION' ? "RETURNS\\s+$Wg\\s+" : '').'(.*)~is', $g, $C);
        $m = [];
        preg_match_all("~$Re\\s*,?~is", $C[1], $Gd, PREG_SET_ORDER);
        foreach ($Gd as $Ie) {
            $m[] = ['field' => str_replace('``', '`', $Ie[2]).$Ie[3], 'type' => strtolower($Ie[5]), 'length' => preg_replace_callback("~$bc~s", 'normalize_enum', $Ie[6]), 'unsigned' => strtolower(preg_replace('~\s+~', ' ', trim("$Ie[8] $Ie[7]"))), 'null' => 1, 'full_type' => $Ie[4], 'inout' => strtoupper($Ie[1]), 'collation' => strtolower($Ie[9])];
        }if ($U != 'FUNCTION') {
            return ['fields' => $m, 'definition' => $C[11]];
        }

        return ['fields' => $m, 'returns' => ['type' => $C[12], 'length' => $C[13], 'unsigned' => $C[15], 'collation' => $C[16]], 'definition' => $C[17], 'language' => 'SQL'];
    }function routines()
    {
        return get_rows('SELECT ROUTINE_NAME AS SPECIFIC_NAME, ROUTINE_NAME, ROUTINE_TYPE, DTD_IDENTIFIER FROM information_schema.ROUTINES WHERE ROUTINE_SCHEMA = '.q(DB));
    }function routine_languages()
    {
        return [];
    }function routine_id($E, $L)
    {
        return idf_escape($E);
    }function last_id()
    {
        global $e;

        return $e->result('SELECT LAST_INSERT_ID()');
    }function explain($e, $I)
    {
        return $e->query('EXPLAIN '.(min_version(5.1) && ! min_version(5.7) ? 'PARTITIONS ' : '').$I);
    }function found_rows($R, $Z)
    {
        return $Z || $R['Engine'] != 'InnoDB' ? null : $R['Rows'];
    }function types()
    {
        return [];
    }function schemas()
    {
        return [];
    }function get_schema()
    {
        return '';
    }function set_schema($Hf, $f = null)
    {
        return true;
    }function create_sql($Q, $ya, $kg)
    {
        global $e;
        $K = $e->result('SHOW CREATE TABLE '.table($Q), 1);
        if (! $ya) {
            $K = preg_replace('~ AUTO_INCREMENT=\d+~', '', $K);
        }

        return $K;
    }function truncate_sql($Q)
    {
        return 'TRUNCATE '.table($Q);
    }function use_sql($ub)
    {
        return 'USE '.idf_escape($ub);
    }function trigger_sql($Q)
    {
        $K = '';
        foreach (get_rows('SHOW TRIGGERS LIKE '.q(addcslashes($Q, '%_\\')), null, '-- ') as $L) {
            $K .= "\nCREATE TRIGGER ".idf_escape($L['Trigger'])." $L[Timing] $L[Event] ON ".table($L['Table'])." FOR EACH ROW\n$L[Statement];;\n";
        }

        return $K;
    }function show_variables()
    {
        return get_key_vals('SHOW VARIABLES');
    }function process_list()
    {
        return get_rows('SHOW FULL PROCESSLIST');
    }function show_status()
    {
        return get_key_vals('SHOW STATUS');
    }function convert_field($l)
    {
        if (preg_match('~binary~', $l['type'])) {
            return 'HEX('.idf_escape($l['field']).')';
        }if ($l['type'] == 'bit') {
            return 'BIN('.idf_escape($l['field']).' + 0)';
        }if (preg_match('~geometry|point|linestring|polygon~', $l['type'])) {
            return (min_version(8) ? 'ST_' : '').'AsWKT('.idf_escape($l['field']).')';
        }
    }function unconvert_field($l, $K)
    {
        if (preg_match('~binary~', $l['type'])) {
            $K = "UNHEX($K)";
        }if ($l['type'] == 'bit') {
            $K = "CONV($K, 2, 10) + 0";
        }if (preg_match('~geometry|point|linestring|polygon~', $l['type'])) {
            $K = (min_version(8) ? 'ST_' : '')."GeomFromText($K, SRID($l[field]))";
        }

        return $K;
    }function support($sc)
    {
        return ! preg_match('~scheme|sequence|type|view_trigger|materializedview'.(min_version(8) ? '' : '|descidx'.(min_version(5.1) ? '' : '|event|partitioning'.(min_version(5) ? '' : '|routine|trigger|view'))).'~', $sc);
    }function kill_process($X)
    {
        return queries('KILL '.number($X));
    }function connection_id()
    {
        return 'SELECT CONNECTION_ID()';
    }function max_connections()
    {
        global $e;

        return $e->result('SELECT @@max_connections');
    }function driver_config()
    {
        $Xg = [];
        $jg = [];
        foreach (['Numbers' => ['tinyint' => 3, 'smallint' => 5, 'mediumint' => 8, 'int' => 10, 'bigint' => 20, 'decimal' => 66, 'float' => 12, 'double' => 21], 'Date and time' => ['date' => 10, 'datetime' => 19, 'timestamp' => 19, 'time' => 10, 'year' => 4], 'Strings' => ['char' => 255, 'varchar' => 65535, 'tinytext' => 255, 'text' => 65535, 'mediumtext' => 16777215, 'longtext' => 4294967295], 'Lists' => ['enum' => 65535, 'set' => 64], 'Binary' => ['bit' => 20, 'binary' => 255, 'varbinary' => 65535, 'tinyblob' => 255, 'blob' => 65535, 'mediumblob' => 16777215, 'longblob' => 4294967295], 'Geometry' => ['geometry' => 0, 'point' => 0, 'linestring' => 0, 'polygon' => 0, 'multipoint' => 0, 'multilinestring' => 0, 'multipolygon' => 0, 'geometrycollection' => 0]] as $z => $X) {
            $Xg += $X;
            $jg[$z] = array_keys($X);
        }

        return ['possible_drivers' => ['MySQLi', 'MySQL', 'PDO_MySQL'], 'jush' => 'sql', 'types' => $Xg, 'structured_types' => $jg, 'unsigned' => ['unsigned', 'zerofill', 'unsigned zerofill'], 'operators' => ['=', '<', '>', '<=', '>=', '!=', 'LIKE', 'LIKE %%', 'REGEXP', 'IN', 'FIND_IN_SET', 'IS NULL', 'NOT LIKE', 'NOT REGEXP', 'NOT IN', 'IS NOT NULL', 'SQL'], 'functions' => ['char_length', 'date', 'from_unixtime', 'lower', 'round', 'floor', 'ceil', 'sec_to_time', 'time_to_sec', 'upper'], 'grouping' => ['avg', 'count', 'count distinct', 'group_concat', 'max', 'min', 'sum'], 'edit_functions' => [['char' => 'md5/sha1/password/encrypt/uuid', 'binary' => 'md5/sha1', 'date|time' => 'now'], [number_type() => '+/-', 'date' => '+ interval/- interval', 'time' => 'addtime/subtime', 'char|text' => 'concat']]];
    }
}$eb = driver_config();
$Ze = $eb['possible_drivers'];
$y = $eb['jush'];
$Xg = $eb['types'];
$jg = $eb['structured_types'];
$eh = $eb['unsigned'];
$se = $eb['operators'];
$Fc = $eb['functions'];
$Jc = $eb['grouping'];
$Rb = $eb['edit_functions'];
if ($b->operators === null) {
    $b->operators = $se;
}define('SERVER', $_GET[DRIVER]);
define('DB', $_GET['db']);
define('ME', preg_replace('~\?.*~', '', relative_uri()).'?'.(sid() ? SID.'&' : '').(SERVER !== null ? DRIVER.'='.urlencode(SERVER).'&' : '').(isset($_GET['username']) ? 'username='.urlencode($_GET['username']).'&' : '').(DB != '' ? 'db='.urlencode(DB).'&'.(isset($_GET['ns']) ? 'ns='.urlencode($_GET['ns']).'&' : '') : ''));
$ga = '4.8.1';
function page_header($Gg, $k = '', $Ha = [], $Hg = '')
{
    global $ca,$ga,$b,$Kb,$y;
    page_headers();
    if (is_ajax() && $k) {
        page_messages($k);
        exit;
    }$Ig = $Gg.($Hg != '' ? ": $Hg" : '');
    $Jg = strip_tags($Ig.(SERVER != '' && SERVER != 'localhost' ? h(' - '.SERVER) : '').' - '.$b->name());
    echo '<!DOCTYPE html>
<html lang="en" dir="ltr">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="robots" content="noindex">
<title>',$Jg,'</title>
<link rel="stylesheet" type="text/css" href="',h(preg_replace('~\\?.*~', '', ME).'?file=default.css&version=4.8.1'),'">
',script_src(preg_replace('~\\?.*~', '', ME).'?file=functions.js&version=4.8.1');
    if ($b->head()) {
        echo '<link rel="shortcut icon" type="image/x-icon" href="',h(preg_replace('~\\?.*~', '', ME).'?file=favicon.ico&version=4.8.1'),'">
<link rel="apple-touch-icon" href="',h(preg_replace('~\\?.*~', '', ME).'?file=favicon.ico&version=4.8.1'),'">
';
        foreach ($b->css() as $pb) {
            echo '<link rel="stylesheet" type="text/css" href="',h($pb),'">
';
        }
    }echo '
<body class="ltr nojs">
';
    $vc = get_temp_dir().'/adminer.version';
    if (! $_COOKIE['adminer_version'] && function_exists('openssl_verify') && file_exists($vc) && filemtime($vc) + 86400 > time()) {
        $rh = unserialize(file_get_contents($vc));
        $jf = '-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwqWOVuF5uw7/+Z70djoK
RlHIZFZPO0uYRezq90+7Amk+FDNd7KkL5eDve+vHRJBLAszF/7XKXe11xwliIsFs
DFWQlsABVZB3oisKCBEuI71J4kPH8dKGEWR9jDHFw3cWmoH3PmqImX6FISWbG3B8
h7FIx3jEaw5ckVPVTeo5JRm/1DZzJxjyDenXvBQ/6o9DgZKeNDgxwKzH+sw9/YCO
jHnq1cFpOIISzARlrHMa/43YfeNRAm/tsBXjSxembBPo7aQZLAWHmaj5+K19H10B
nCpz9Y++cipkVEiKRGih4ZEvjoFysEOdRLj6WiD/uUNky4xGeA6LaJqh5XpkFkcQ
fQIDAQAB
-----END PUBLIC KEY-----
';
        if (openssl_verify($rh['version'], base64_decode($rh['signature']), $jf) == 1) {
            $_COOKIE['adminer_version'] = $rh['version'];
        }
    }echo '<script',nonce(),'>
mixin(document.body, {onkeydown: bodyKeydown, onclick: bodyClick',(isset($_COOKIE['adminer_version']) ? '' : ", onload: partial(verifyVersion, '$ga', '".js_escape(ME)."', '".get_token()."')"); ?>});
document.body.className = document.body.className.replace(/ nojs/, ' js');
var offlineMessage = '<?php echo js_escape('You are offline.'),'\';
var thousandsSeparator = \'',js_escape(','),'\';
</script>

<div id="help" class="jush-',$y,' jsonly hidden"></div>
',script("mixin(qs('#help'), {onmouseover: function () { helpOpen = 1; }, onmouseout: helpMouseout});"),'
<div id="content">
';
    if ($Ha !== null) {
        $A = substr(preg_replace('~\b(username|db|ns)=[^&]*&~', '', ME), 0, -1);
        echo '<p id="breadcrumb"><a href="'.h($A ? $A : '.').'">'.$Kb[DRIVER].'</a> &raquo; ';
        $A = substr(preg_replace('~\b(db|ns)=[^&]*&~', '', ME), 0, -1);
        $O = $b->serverName(SERVER);
        $O = ($O != '' ? $O : 'Server');
        if ($Ha === false) {
            echo "$O\n";
        } else {
            echo "<a href='".h($A)."' accesskey='1' title='Alt+Shift+1'>$O</a> &raquo; ";
            if ($_GET['ns'] != '' || (DB != '' && is_array($Ha))) {
                echo '<a href="'.h($A.'&db='.urlencode(DB).(support('scheme') ? '&ns=' : '')).'">'.h(DB).'</a> &raquo; ';
            }if (is_array($Ha)) {
                if ($_GET['ns'] != '') {
                    echo '<a href="'.h(substr(ME, 0, -1)).'">'.h($_GET['ns']).'</a> &raquo; ';
                }foreach ($Ha as $z => $X) {
                    $Db = (is_array($X) ? $X[1] : h($X));
                    if ($Db != '') {
                        echo "<a href='".h(ME."$z=").urlencode(is_array($X) ? $X[0] : $X)."'>$Db</a> &raquo; ";
                    }
                }
            }echo "$Gg\n";
        }
    }echo "<h2>$Ig</h2>\n","<div id='ajaxstatus' class='jsonly hidden'></div>\n";
    restart_session();
    page_messages($k);
    $h = &get_session('dbs');
    if (DB != '' && $h && ! in_array(DB, $h, true)) {
        $h = null;
    }stop_session();
    define('PAGE_HEADER', 1);
}function page_headers()
{
    global $b;
    header('Content-Type: text/html; charset=utf-8');
    header('Cache-Control: no-cache');
    header('X-Frame-Options: deny');
    header('X-XSS-Protection: 0');
    header('X-Content-Type-Options: nosniff');
    header('Referrer-Policy: origin-when-cross-origin');
    foreach ($b->csp() as $ob) {
        $Pc = [];
        foreach ($ob as $z => $X) {
            $Pc[] = "$z $X";
        }header('Content-Security-Policy: '.implode('; ', $Pc));
    }$b->headers();
}function csp()
{
    return [['script-src' => "'self' 'unsafe-inline' 'nonce-".get_nonce()."' 'strict-dynamic'", 'connect-src' => "'self'", 'frame-src' => 'https://www.adminer.org', 'object-src' => "'none'", 'base-uri' => "'none'", 'form-action' => "'self'"]];
}function get_nonce()
{
    static $ce;
    if (! $ce) {
        $ce = base64_encode(rand_string());
    }

    return $ce;
}function page_messages($k)
{
    $gh = preg_replace('~^[^?]*~', '', $_SERVER['REQUEST_URI']);
    $Rd = $_SESSION['messages'][$gh];
    if ($Rd) {
        echo "<div class='message'>".implode("</div>\n<div class='message'>", $Rd).'</div>'.script('messagesPrint();');
        unset($_SESSION['messages'][$gh]);
    }if ($k) {
        echo "<div class='error'>$k</div>\n";
    }
}function page_footer($Td = '')
{
    global $b,$T;
    echo '</div>

';
    if ($Td != 'auth') {
        echo '<form action="" method="post">
<p class="logout">
<input type="submit" name="logout" value="Logout" id="logout">
<input type="hidden" name="token" value="',$T,'">
</p>
</form>
';
    }echo '<div id="menu">
';
    $b->navigation($Td);
    echo '</div>
',script('setupSubmitHighlight(document);');
}function int32($Wd)
{
    while ($Wd >= 2147483648) {
        $Wd -= 4294967296;
    }while ($Wd <= -2147483649) {
        $Wd += 4294967296;
    }

    return (int) $Wd;
}function long2str($W, $vh)
{
    $Ff = '';
    foreach ($W as $X) {
        $Ff .= pack('V', $X);
    }if ($vh) {
        return substr($Ff, 0, end($W));
    }

    return $Ff;
}function str2long($Ff, $vh)
{
    $W = array_values(unpack('V*', str_pad($Ff, 4 * ceil(strlen($Ff) / 4), "\0")));
    if ($vh) {
        $W[] = strlen($Ff);
    }

    return $W;
}function xxtea_mx($Bh, $Ah, $ng, $md)
{
    return int32((($Bh >> 5 & 0x7FFFFFF) ^ $Ah << 2) + (($Ah >> 3 & 0x1FFFFFFF) ^ $Bh << 4)) ^ int32(($ng ^ $Ah) + ($md ^ $Bh));
}function encrypt_string($hg, $z)
{
    if ($hg == '') {
        return '';
    }$z = array_values(unpack('V*', pack('H*', md5($z))));
    $W = str2long($hg, true);
    $Wd = count($W) - 1;
    $Bh = $W[$Wd];
    $Ah = $W[0];
    $H = floor(6 + 52 / ($Wd + 1));
    $ng = 0;
    while ($H-- > 0) {
        $ng = int32($ng + 0x9E3779B9);
        $Qb = $ng >> 2 & 3;
        for ($Ge = 0; $Ge < $Wd; $Ge++) {
            $Ah = $W[$Ge + 1];
            $Vd = xxtea_mx($Bh, $Ah, $ng, $z[$Ge & 3 ^ $Qb]);
            $Bh = int32($W[$Ge] + $Vd);
            $W[$Ge] = $Bh;
        }$Ah = $W[0];
        $Vd = xxtea_mx($Bh, $Ah, $ng, $z[$Ge & 3 ^ $Qb]);
        $Bh = int32($W[$Wd] + $Vd);
        $W[$Wd] = $Bh;
    }

    return long2str($W, false);
}function decrypt_string($hg, $z)
{
    if ($hg == '') {
        return '';
    }if (! $z) {
        return false;
    }$z = array_values(unpack('V*', pack('H*', md5($z))));
    $W = str2long($hg, false);
    $Wd = count($W) - 1;
    $Bh = $W[$Wd];
    $Ah = $W[0];
    $H = floor(6 + 52 / ($Wd + 1));
    $ng = int32($H * 0x9E3779B9);
    while ($ng) {
        $Qb = $ng >> 2 & 3;
        for ($Ge = $Wd; $Ge > 0; $Ge--) {
            $Bh = $W[$Ge - 1];
            $Vd = xxtea_mx($Bh, $Ah, $ng, $z[$Ge & 3 ^ $Qb]);
            $Ah = int32($W[$Ge] - $Vd);
            $W[$Ge] = $Ah;
        }$Bh = $W[$Wd];
        $Vd = xxtea_mx($Bh, $Ah, $ng, $z[$Ge & 3 ^ $Qb]);
        $Ah = int32($W[0] - $Vd);
        $W[0] = $Ah;
        $ng = int32($ng - 0x9E3779B9);
    }

    return long2str($W, true);
}$e = '';
$Oc = $_SESSION['token'];
if (! $Oc) {
    $_SESSION['token'] = rand(1, 1e6);
}$T = get_token();
$Te = [];
if ($_COOKIE['adminer_permanent']) {
    foreach (explode(' ', $_COOKIE['adminer_permanent']) as $X) {
        [$z] = explode(':', $X);
        $Te[$z] = $X;
    }
}function add_invalid_login()
{
    global $b;
    $p = file_open_lock(get_temp_dir().'/adminer.invalid');
    if (! $p) {
        return;
    }$hd = unserialize(stream_get_contents($p));
    $Dg = time();
    if ($hd) {
        foreach ($hd as $id => $X) {
            if ($X[0] < $Dg) {
                unset($hd[$id]);
            }
        }
    }$gd = &$hd[$b->bruteForceKey()];
    if (! $gd) {
        $gd = [$Dg + 30 * 60, 0];
    }$gd[1]++;
    file_write_unlock($p, serialize($hd));
}function check_invalid_login()
{
    global $b;
    $hd = unserialize(@file_get_contents(get_temp_dir().'/adminer.invalid'));
    $gd = ($hd ? $hd[$b->bruteForceKey()] : []);
    $be = ($gd[1] > 29 ? $gd[0] - time() : 0);
    if ($be > 0) {
        auth_error(lang(['Too many unsuccessful logins, try again in %d minute.', 'Too many unsuccessful logins, try again in %d minutes.'], ceil($be / 60)));
    }
}$xa = $_POST['auth'];
if ($xa) {
    session_regenerate_id();
    $qh = $xa['driver'];
    $O = $xa['server'];
    $V = $xa['username'];
    $G = (string) $xa['password'];
    $i = $xa['db'];
    set_password($qh, $O, $V, $G);
    $_SESSION['db'][$qh][$O][$V][$i] = true;
    if ($xa['permanent']) {
        $z = base64_encode($qh).'-'.base64_encode($O).'-'.base64_encode($V).'-'.base64_encode($i);
        $ef = $b->permanentLogin(true);
        $Te[$z] = "$z:".base64_encode($ef ? encrypt_string($G, $ef) : '');
        cookie('adminer_permanent', implode(' ', $Te));
    }if (count($_POST) == 1 || $qh != DRIVER || $O != SERVER || $_GET['username'] !== $V || $i != DB) {
        redirect(auth_url($qh, $O, $V, $i));
    }
} elseif ($_POST['logout'] && (! $Oc || verify_token())) {
    foreach (['pwds', 'db', 'dbs', 'queries'] as $z) {
        set_session($z, null);
    }unset_permanent();
    redirect(substr(preg_replace('~\b(username|db|ns)=[^&]*&~', '', ME), 0, -1), 'Logout successful.'.' '.'Thanks for using Adminer, consider <a href="https://www.adminer.org/en/donation/">donating</a>.');
} elseif ($Te && ! $_SESSION['pwds']) {
    session_regenerate_id();
    $ef = $b->permanentLogin();
    foreach ($Te as $z => $X) {
        [, $Qa] = explode(':', $X);
        [$qh, $O, $V, $i] = array_map('base64_decode', explode('-', $z));
        set_password($qh, $O, $V, decrypt_string(base64_decode($Qa), $ef));
        $_SESSION['db'][$qh][$O][$V][$i] = true;
    }
}function unset_permanent()
{
    global $Te;
    foreach ($Te as $z => $X) {
        [$qh, $O, $V, $i] = array_map('base64_decode', explode('-', $z));
        if ($qh == DRIVER && $O == SERVER && $V == $_GET['username'] && $i == DB) {
            unset($Te[$z]);
        }
    }cookie('adminer_permanent', implode(' ', $Te));
}function auth_error($k)
{
    global $b,$Oc;
    $Rf = session_name();
    if (isset($_GET['username'])) {
        header('HTTP/1.1 403 Forbidden');
        if (($_COOKIE[$Rf] || $_GET[$Rf]) && ! $Oc) {
            $k = 'Session expired, please login again.';
        } else {
            restart_session();
            add_invalid_login();
            $G = get_password();
            if ($G !== null) {
                if ($G === false) {
                    $k .= ($k ? '<br>' : '').sprintf('Master password expired. <a href="https://www.adminer.org/en/extension/"%s>Implement</a> %s method to make it permanent.', target_blank(), '<code>permanentLogin()</code>');
                }set_password(DRIVER, SERVER, $_GET['username'], null);
            }unset_permanent();
        }
    }if (! $_COOKIE[$Rf] && $_GET[$Rf] && ini_bool('session.use_only_cookies')) {
        $k = 'Session support must be enabled.';
    }$Je = session_get_cookie_params();
    cookie('adminer_key', ($_COOKIE['adminer_key'] ? $_COOKIE['adminer_key'] : rand_string()), $Je['lifetime']);
    page_header('Login', $k, null);
    echo "<form action='' method='post'>\n",'<div>';
    if (hidden_fields($_POST, ['auth'])) {
        echo "<p class='message'>".'The action will be performed after successful login with the same credentials.'."\n";
    }echo "</div>\n";
    $b->loginForm();
    echo "</form>\n";
    page_footer('auth');
    exit;
}if (isset($_GET['username']) && ! class_exists('Min_DB')) {
    unset($_SESSION['pwds'][DRIVER]);
    unset_permanent();
    page_header('No extension', sprintf('None of the supported PHP extensions (%s) are available.', implode(', ', $Ze)), false);
    page_footer('auth');
    exit;
}stop_session(true);
if (isset($_GET['username']) && is_string(get_password())) {
    [$Tc, $Ve] = explode(':', SERVER, 2);
    if (preg_match('~^\s*([-+]?\d+)~', $Ve, $C) && ($C[1] < 1024 || $C[1] > 65535)) {
        auth_error('Connecting to privileged ports is not allowed.');
    }check_invalid_login();
    $e = connect();
    $j = new Min_Driver($e);
}$Cd = null;
if (! is_object($e) || ($Cd = $b->login($_GET['username'], get_password())) !== true) {
    $k = (is_string($e) ? h($e) : (is_string($Cd) ? $Cd : 'Invalid credentials.'));
    auth_error($k.(preg_match('~^ | $~', get_password()) ? '<br>'.'There is a space in the input password which might be the cause.' : ''));
}if ($_POST['logout'] && $Oc && ! verify_token()) {
    page_header('Logout', 'Invalid CSRF token. Send the form again.');
    page_footer('db');
    exit;
}if ($xa && $_POST['token']) {
    $_POST['token'] = $T;
}$k = '';
if ($_POST) {
    if (! verify_token()) {
        $bd = 'max_input_vars';
        $Md = ini_get($bd);
        if (extension_loaded('suhosin')) {
            foreach (['suhosin.request.max_vars', 'suhosin.post.max_vars'] as $z) {
                $X = ini_get($z);
                if ($X && (! $Md || $X < $Md)) {
                    $bd = $z;
                    $Md = $X;
                }
            }
        }$k = (! $_POST['token'] && $Md ? sprintf('Maximum number of allowed fields exceeded. Please increase %s.', "'$bd'") : 'Invalid CSRF token. Send the form again.'.' '.'If you did not send this request from Adminer then close this page.');
    }
} elseif ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $k = sprintf('Too big POST data. Reduce the data or increase the %s configuration directive.', "'post_max_size'");
    if (isset($_GET['sql'])) {
        $k .= ' '.'You can upload a big SQL file via FTP and import it from server.';
    }
}function select($J, $f = null, $ze = [], $_ = 0)
{
    global $y;
    $Bd = [];
    $w = [];
    $d = [];
    $Fa = [];
    $Xg = [];
    $K = [];
    odd('');
    for ($t = 0; (! $_ || $t < $_) && ($L = $J->fetch_row()); $t++) {
        if (! $t) {
            echo "<div class='scrollable'>\n","<table cellspacing='0' class='nowrap'>\n",'<thead><tr>';
            for ($x = 0; $x < count($L); $x++) {
                $l = $J->fetch_field();
                $E = $l->name;
                $ye = $l->orgtable;
                $xe = $l->orgname;
                $K[$l->table] = $ye;
                if ($ze && $y == 'sql') {
                    $Bd[$x] = ($E == 'table' ? 'table=' : ($E == 'possible_keys' ? 'indexes=' : null));
                } elseif ($ye != '') {
                    if (! isset($w[$ye])) {
                        $w[$ye] = [];
                        foreach (indexes($ye, $f) as $v) {
                            if ($v['type'] == 'PRIMARY') {
                                $w[$ye] = array_flip($v['columns']);
                                break;
                            }
                        }$d[$ye] = $w[$ye];
                    }if (isset($d[$ye][$xe])) {
                        unset($d[$ye][$xe]);
                        $w[$ye][$xe] = $x;
                        $Bd[$x] = $ye;
                    }
                }if ($l->charsetnr == 63) {
                    $Fa[$x] = true;
                }$Xg[$x] = $l->type;
                echo '<th'.($ye != '' || $l->name != $xe ? " title='".h(($ye != '' ? "$ye." : '').$xe)."'" : '').'>'.h($E).($ze ? doc_link(['sql' => 'explain-output.html#explain_'.strtolower($E), 'mariadb' => 'explain/#the-columns-in-explain-select']) : '');
            }echo "</thead>\n";
        }echo '<tr'.odd().'>';
        foreach ($L as $z => $X) {
            $A = '';
            if (isset($Bd[$z]) && ! $d[$Bd[$z]]) {
                if ($ze && $y == 'sql') {
                    $Q = $L[array_search('table=', $Bd)];
                    $A = ME.$Bd[$z].urlencode($ze[$Q] != '' ? $ze[$Q] : $Q);
                } else {
                    $A = ME.'edit='.urlencode($Bd[$z]);
                    foreach ($w[$Bd[$z]] as $Ua => $x) {
                        $A .= '&where'.urlencode('['.bracket_escape($Ua).']').'='.urlencode($L[$x]);
                    }
                }
            } elseif (is_url($X)) {
                $A = $X;
            }if ($X === null) {
                $X = '<i>NULL</i>';
            } elseif ($Fa[$z] && ! is_utf8($X)) {
                $X = '<i>'.lang(['%d byte', '%d bytes'], strlen($X)).'</i>';
            } else {
                $X = h($X);
                if ($Xg[$z] == 254) {
                    $X = "<code>$X</code>";
                }
            }if ($A) {
                $X = "<a href='".h($A)."'".(is_url($A) ? target_blank() : '').">$X</a>";
            }echo "<td>$X";
        }
    }echo ($t ? "</table>\n</div>" : "<p class='message'>".'No rows.')."\n";

    return $K;
}function referencable_primary($Mf)
{
    $K = [];
    foreach (table_status('', true) as $rg => $Q) {
        if ($rg != $Mf && fk_support($Q)) {
            foreach (fields($rg) as $l) {
                if ($l['primary']) {
                    if ($K[$rg]) {
                        unset($K[$rg]);
                        break;
                    }$K[$rg] = $l;
                }
            }
        }
    }

    return $K;
}function adminer_settings()
{
    parse_str($_COOKIE['adminer_settings'], $Tf);

    return $Tf;
}function adminer_setting($z)
{
    $Tf = adminer_settings();

    return $Tf[$z];
}function set_adminer_settings($Tf)
{
    return cookie('adminer_settings', http_build_query($Tf + adminer_settings()));
}function textarea($E, $Y, $M = 10, $Ya = 80)
{
    global $y;
    echo "<textarea name='$E' rows='$M' cols='$Ya' class='sqlarea jush-$y' spellcheck='false' wrap='off'>";
    if (is_array($Y)) {
        foreach ($Y as $X) {
            echo h($X[0])."\n\n\n";
        }
    } else {
        echo h($Y);
    }echo '</textarea>';
}function edit_type($z, $l, $Xa, $o = [], $pc = [])
{
    global $jg,$Xg,$eh,$oe;
    $U = $l['type'];
    echo '<td><select name="',h($z),'[type]" class="type" aria-labelledby="label-type">';
    if ($U && ! isset($Xg[$U]) && ! isset($o[$U]) && ! in_array($U, $pc)) {
        $pc[] = $U;
    }if ($o) {
        $jg['Foreign keys'] = $o;
    }echo optionlist(array_merge($pc, $jg), $U),'</select><td><input name="',h($z),'[length]" value="',h($l['length']),'" size="3"',(! $l['length'] && preg_match('~var(char|binary)$~', $U) ? " class='required'" : '');
    echo ' aria-labelledby="label-length"><td class="options">',"<select name='".h($z)."[collation]'".(preg_match('~(char|text|enum|set)$~', $U) ? '' : " class='hidden'").'><option value="">('.'collation'.')'.optionlist($Xa, $l['collation']).'</select>',($eh ? "<select name='".h($z)."[unsigned]'".(! $U || preg_match(number_type(), $U) ? '' : " class='hidden'").'><option>'.optionlist($eh, $l['unsigned']).'</select>' : ''),(isset($l['on_update']) ? "<select name='".h($z)."[on_update]'".(preg_match('~timestamp|datetime~', $U) ? '' : " class='hidden'").'>'.optionlist(['' => '('.'ON UPDATE'.')', 'CURRENT_TIMESTAMP'], (preg_match('~^CURRENT_TIMESTAMP~i', $l['on_update']) ? 'CURRENT_TIMESTAMP' : $l['on_update'])).'</select>' : ''),($o ? "<select name='".h($z)."[on_delete]'".(preg_match('~`~', $U) ? '' : " class='hidden'")."><option value=''>(".'ON DELETE'.')'.optionlist(explode('|', $oe), $l['on_delete']).'</select> ' : ' ');
}function process_length($zd)
{
    global $bc;

    return preg_match("~^\\s*\\(?\\s*$bc(?:\\s*,\\s*$bc)*+\\s*\\)?\\s*\$~", $zd) && preg_match_all("~$bc~", $zd, $Gd) ? '('.implode(',', $Gd[0]).')' : preg_replace('~^[0-9].*~', '(\0)', preg_replace('~[^-0-9,+()[\]]~', '', $zd));
}function process_type($l, $Va = 'COLLATE')
{
    global $eh;

    return " $l[type]".process_length($l['length']).(preg_match(number_type(), $l['type']) && in_array($l['unsigned'], $eh) ? " $l[unsigned]" : '').(preg_match('~char|text|enum|set~', $l['type']) && $l['collation'] ? " $Va ".q($l['collation']) : '');
}function process_field($l, $Vg)
{
    return [idf_escape(trim($l['field'])), process_type($Vg), ($l['null'] ? ' NULL' : ' NOT NULL'), default_value($l), (preg_match('~timestamp|datetime~', $l['type']) && $l['on_update'] ? " ON UPDATE $l[on_update]" : ''), (support('comment') && $l['comment'] != '' ? ' COMMENT '.q($l['comment']) : ''), ($l['auto_increment'] ? auto_increment() : null)];
}function default_value($l)
{
    $zb = $l['default'];

    return $zb === null ? '' : ' DEFAULT '.(preg_match('~char|binary|text|enum|set~', $l['type']) || preg_match('~^(?![a-z])~i', $zb) ? q($zb) : $zb);
}function type_class($U)
{
    foreach (['char' => 'text', 'date' => 'time|year', 'binary' => 'blob', 'enum' => 'set'] as $z => $X) {
        if (preg_match("~$z|$X~", $U)) {
            return " class='$z'";
        }
    }
}function edit_fields($m, $Xa, $U = 'TABLE', $o = [])
{
    global $cd;
    $m = array_values($m);
    $_b = (($_POST ? $_POST['defaults'] : adminer_setting('defaults')) ? '' : " class='hidden'");
    $cb = (($_POST ? $_POST['comments'] : adminer_setting('comments')) ? '' : " class='hidden'");
    echo '<thead><tr>
';
    if ($U == 'PROCEDURE') {
        echo '<td>';
    }echo '<th id="label-name">',($U == 'TABLE' ? 'Column name' : 'Parameter name'),'<td id="label-type">Type<textarea id="enum-edit" rows="4" cols="12" wrap="off" style="display: none;"></textarea>',script("qs('#enum-edit').onblur = editingLengthBlur;"),'<td id="label-length">Length
<td>','Options';
    if ($U == 'TABLE') {
        echo '<td id="label-null">NULL
<td><input type="radio" name="auto_increment_col" value=""><acronym id="label-ai" title="Auto Increment">AI</acronym>',doc_link(['sql' => 'example-auto-increment.html', 'mariadb' => 'auto_increment/']),'<td id="label-default"',$_b,'>Default value
',(support('comment') ? "<td id='label-comment'$cb>".'Comment' : '');
    }echo '<td>',"<input type='image' class='icon' name='add[".(support('move_col') ? 0 : count($m))."]' src='".h(preg_replace('~\\?.*~', '', ME).'?file=plus.gif&version=4.8.1')."' alt='+' title='".'Add next'."'>".script('row_count = '.count($m).';'),'</thead>
<tbody>
',script("mixin(qsl('tbody'), {onclick: editingClick, onkeydown: editingKeydown, oninput: editingInput});");
    foreach ($m as $t => $l) {
        $t++;
        $_e = $l[($_POST ? 'orig' : 'field')];
        $Hb = (isset($_POST['add'][$t - 1]) || (isset($l['field']) && ! $_POST['drop_col'][$t])) && (support('drop_col') || $_e == '');
        echo '<tr',($Hb ? '' : " style='display: none;'"),'>
',($U == 'PROCEDURE' ? '<td>'.html_select("fields[$t][inout]", explode('|', $cd), $l['inout']) : ''),'<th>';
        if ($Hb) {
            echo '<input name="fields[',$t,'][field]" value="',h($l['field']),'" data-maxlength="64" autocapitalize="off" aria-labelledby="label-name">';
        }echo '<input type="hidden" name="fields[',$t,'][orig]" value="',h($_e),'">';
        edit_type("fields[$t]", $l, $Xa, $o);
        if ($U == 'TABLE') {
            echo '<td>',checkbox("fields[$t][null]", 1, $l['null'], '', '', 'block', 'label-null'),'<td><label class="block"><input type="radio" name="auto_increment_col" value="',$t,'"';
            if ($l['auto_increment']) {
                echo ' checked';
            }echo ' aria-labelledby="label-ai"></label><td',$_b,'>',checkbox("fields[$t][has_default]", 1, $l['has_default'], '', '', '', 'label-default'),'<input name="fields[',$t,'][default]" value="',h($l['default']),'" aria-labelledby="label-default">',(support('comment') ? "<td$cb><input name='fields[$t][comment]' value='".h($l['comment'])."' data-maxlength='".(min_version(5.5) ? 1024 : 255)."' aria-labelledby='label-comment'>" : '');
        }echo '<td>',(support('move_col') ? "<input type='image' class='icon' name='add[$t]' src='".h(preg_replace('~\\?.*~', '', ME).'?file=plus.gif&version=4.8.1')."' alt='+' title='".'Add next'."'> "."<input type='image' class='icon' name='up[$t]' src='".h(preg_replace('~\\?.*~', '', ME).'?file=up.gif&version=4.8.1')."' alt='↑' title='".'Move up'."'> "."<input type='image' class='icon' name='down[$t]' src='".h(preg_replace('~\\?.*~', '', ME).'?file=down.gif&version=4.8.1')."' alt='↓' title='".'Move down'."'> " : ''),($_e == '' || support('drop_col') ? "<input type='image' class='icon' name='drop_col[$t]' src='".h(preg_replace('~\\?.*~', '', ME).'?file=cross.gif&version=4.8.1')."' alt='x' title='".'Remove'."'>" : '');
    }
}function process_fields(&$m)
{
    $he = 0;
    if ($_POST['up']) {
        $td = 0;
        foreach ($m as $z => $l) {
            if (key($_POST['up']) == $z) {
                unset($m[$z]);
                array_splice($m, $td, 0, [$l]);
                break;
            }if (isset($l['field'])) {
                $td = $he;
            }$he++;
        }
    } elseif ($_POST['down']) {
        $Cc = false;
        foreach ($m as $z => $l) {
            if (isset($l['field']) && $Cc) {
                unset($m[key($_POST['down'])]);
                array_splice($m, $he, 0, [$Cc]);
                break;
            }if (key($_POST['down']) == $z) {
                $Cc = $l;
            }$he++;
        }
    } elseif ($_POST['add']) {
        $m = array_values($m);
        array_splice($m, key($_POST['add']), 0, [[]]);
    } elseif (! $_POST['drop_col']) {
        return false;
    }

    return true;
}function normalize_enum($C)
{
    return "'".str_replace("'", "''", addcslashes(stripcslashes(str_replace($C[0][0].$C[0][0], $C[0][0], substr($C[0], 1, -1))), '\\'))."'";
}function grant($r, $gf, $d, $ne)
{
    if (! $gf) {
        return true;
    }if ($gf == ['ALL PRIVILEGES', 'GRANT OPTION']) {
        return $r == 'GRANT' ? queries("$r ALL PRIVILEGES$ne WITH GRANT OPTION") : queries("$r ALL PRIVILEGES$ne") && queries("$r GRANT OPTION$ne");
    }

    return queries("$r ".preg_replace('~(GRANT OPTION)\([^)]*\)~', '\1', implode("$d, ", $gf).$d).$ne);
}function drop_create($Lb, $g, $Mb, $Ag, $Nb, $B, $Qd, $Od, $Pd, $ke, $Zd)
{
    if ($_POST['drop']) {
        query_redirect($Lb, $B, $Qd);
    } elseif ($ke == '') {
        query_redirect($g, $B, $Pd);
    } elseif ($ke != $Zd) {
        $mb = queries($g);
        queries_redirect($B, $Od, $mb && queries($Lb));
        if ($mb) {
            queries($Mb);
        }
    } else {
        queries_redirect($B, $Od, queries($Ag) && queries($Nb) && queries($Lb) && queries($g));
    }
}function create_trigger($ne, $L)
{
    global $y;
    $Fg = " $L[Timing] $L[Event]".(preg_match('~ OF~', $L['Event']) ? " $L[Of]" : '');

    return 'CREATE TRIGGER '.idf_escape($L['Trigger']).($y == 'mssql' ? $ne.$Fg : $Fg.$ne).rtrim(" $L[Type]\n$L[Statement]", ';').';';
}function create_routine($Cf, $L)
{
    global $cd,$y;
    $P = [];
    $m = (array) $L['fields'];
    ksort($m);
    foreach ($m as $l) {
        if ($l['field'] != '') {
            $P[] = (preg_match("~^($cd)\$~", $l['inout']) ? "$l[inout] " : '').idf_escape($l['field']).process_type($l, 'CHARACTER SET');
        }
    }$Ab = rtrim("\n$L[definition]", ';');

    return "CREATE $Cf ".idf_escape(trim($L['name'])).' ('.implode(', ', $P).')'.(isset($_GET['function']) ? ' RETURNS'.process_type($L['returns'], 'CHARACTER SET') : '').($L['language'] ? " LANGUAGE $L[language]" : '').($y == 'pgsql' ? ' AS '.q($Ab) : "$Ab;");
}function remove_definer($I)
{
    return preg_replace('~^([A-Z =]+) DEFINER=`'.preg_replace('~@(.*)~', '`@`(%|\1)', logged_user()).'`~', '\1', $I);
}function format_foreign_key($n)
{
    global $oe;
    $i = $n['db'];
    $de = $n['ns'];

    return ' FOREIGN KEY ('.implode(', ', array_map('idf_escape', $n['source'])).') REFERENCES '.($i != '' && $i != $_GET['db'] ? idf_escape($i).'.' : '').($de != '' && $de != $_GET['ns'] ? idf_escape($de).'.' : '').table($n['table']).' ('.implode(', ', array_map('idf_escape', $n['target'])).')'.(preg_match("~^($oe)\$~", $n['on_delete']) ? " ON DELETE $n[on_delete]" : '').(preg_match("~^($oe)\$~", $n['on_update']) ? " ON UPDATE $n[on_update]" : '');
}function tar_file($vc, $Kg)
{
    $K = pack('a100a8a8a8a12a12', $vc, 644, 0, 0, decoct($Kg->size), decoct(time()));
    $Pa = 8 * 32;
    for ($t = 0; $t < strlen($K); $t++) {
        $Pa += ord($K[$t]);
    }$K .= sprintf('%06o', $Pa)."\0 ";
    echo $K,str_repeat("\0", 512 - strlen($K));
    $Kg->send();
    echo str_repeat("\0", 511 - ($Kg->size + 511) % 512);
}function ini_bytes($bd)
{
    $X = ini_get($bd);
    switch (strtolower(substr($X, -1))) {
        case 'g':$X *= 1024;
        case 'm':$X *= 1024;
        case 'k':$X *= 1024;
    }

    return $X;
}function doc_link($Qe, $Bg = '<sup>?</sup>')
{
    global $y,$e;
    $Pf = $e->server_info;
    $rh = preg_replace('~^(\d\.?\d).*~s', '\1', $Pf);
    $ih = ['sql' => "https://dev.mysql.com/doc/refman/$rh/en/", 'sqlite' => 'https://www.sqlite.org/', 'pgsql' => "https://www.postgresql.org/docs/$rh/", 'mssql' => 'https://msdn.microsoft.com/library/', 'oracle' => 'https://www.oracle.com/pls/topic/lookup?ctx=db'.preg_replace('~^.* (\d+)\.(\d+)\.\d+\.\d+\.\d+.*~s', '\1\2', $Pf).'&id='];
    if (preg_match('~MariaDB~', $Pf)) {
        $ih['sql'] = 'https://mariadb.com/kb/en/library/';
        $Qe['sql'] = (isset($Qe['mariadb']) ? $Qe['mariadb'] : str_replace('.html', '/', $Qe['sql']));
    }

    return $Qe[$y] ? "<a href='".h($ih[$y].$Qe[$y])."'".target_blank().">$Bg</a>" : '';
}function ob_gzencode($ig)
{
    return gzencode($ig);
}function db_size($i)
{
    global $e;
    if (! $e->select_db($i)) {
        return '?';
    }$K = 0;
    foreach (table_status() as $R) {
        $K += $R['Data_length'] + $R['Index_length'];
    }

    return format_number($K);
}function set_utf8mb4($g)
{
    global $e;
    static $P = false;
    if (! $P && preg_match('~\butf8mb4~i', $g)) {
        $P = true;
        echo 'SET NAMES '.charset($e).";\n\n";
    }
}function connect_error()
{
    global $b,$e,$T,$k,$Kb;
    if (DB != '') {
        header('HTTP/1.1 404 Not Found');
        page_header('Database'.': '.h(DB), 'Invalid database.', true);
    } else {
        if ($_POST['db'] && ! $k) {
            queries_redirect(substr(ME, 0, -1), 'Databases have been dropped.', drop_databases($_POST['db']));
        }page_header('Select database', $k, false);
        echo "<p class='links'>\n";
        foreach (['database' => 'Create database', 'privileges' => 'Privileges', 'processlist' => 'Process list', 'variables' => 'Variables', 'status' => 'Status'] as $z => $X) {
            if (support($z)) {
                echo "<a href='".h(ME)."$z='>$X</a>\n";
            }
        }echo '<p>'.sprintf('%s version: %s through PHP extension %s', $Kb[DRIVER], '<b>'.h($e->server_info).'</b>', "<b>$e->extension</b>")."\n",'<p>'.sprintf('Logged as: %s', '<b>'.h(logged_user()).'</b>')."\n";
        $h = $b->databases();
        if ($h) {
            $If = support('scheme');
            $Xa = collations();
            echo "<form action='' method='post'>\n","<table cellspacing='0' class='checkable'>\n",script("mixin(qsl('table'), {onclick: tableClick, ondblclick: partialArg(tableClick, true)});"),'<thead><tr>'.(support('database') ? '<td>' : '').'<th>'.'Database'." - <a href='".h(ME)."refresh=1'>".'Refresh'.'</a>'.'<td>'.'Collation'.'<td>'.'Tables'.'<td>'.'Size'." - <a href='".h(ME)."dbsize=1'>".'Compute'.'</a>'.script("qsl('a').onclick = partial(ajaxSetHtml, '".js_escape(ME)."script=connect');", '')."</thead>\n";
            $h = ($_GET['dbsize'] ? count_tables($h) : array_flip($h));
            foreach ($h as $i => $S) {
                $Bf = h(ME).'db='.urlencode($i);
                $u = h('Db-'.$i);
                echo '<tr'.odd().'>'.(support('database') ? '<td>'.checkbox('db[]', $i, in_array($i, (array) $_POST['db']), '', '', '', $u) : ''),"<th><a href='$Bf' id='$u'>".h($i).'</a>';
                $Wa = h(db_collation($i, $Xa));
                echo '<td>'.(support('database') ? "<a href='$Bf".($If ? '&amp;ns=' : '')."&amp;database=' title='".'Alter database'."'>$Wa</a>" : $Wa),"<td align='right'><a href='$Bf&amp;schema=' id='tables-".h($i)."' title='".'Database schema'."'>".($_GET['dbsize'] ? $S : '?').'</a>',"<td align='right' id='size-".h($i)."'>".($_GET['dbsize'] ? db_size($i) : '?'),"\n";
            }echo "</table>\n",(support('database') ? "<div class='footer'><div>\n".'<fieldset><legend>'.'Selected'." <span id='selected'></span></legend><div>\n"."<input type='hidden' name='all' value=''>".script("qsl('input').onclick = function () { selectCount('selected', formChecked(this, /^db/)); };")."<input type='submit' name='drop' value='".'Drop'."'>".confirm()."\n"."</div></fieldset>\n"."</div></div>\n" : ''),"<input type='hidden' name='token' value='$T'>\n","</form>\n",script('tableCheck();');
        }
    }page_footer('db');
}if (isset($_GET['status'])) {
    $_GET['variables'] = $_GET['status'];
}if (isset($_GET['import'])) {
    $_GET['sql'] = $_GET['import'];
}if (! (DB != '' ? $e->select_db(DB) : isset($_GET['sql']) || isset($_GET['dump']) || isset($_GET['database']) || isset($_GET['processlist']) || isset($_GET['privileges']) || isset($_GET['user']) || isset($_GET['variables']) || $_GET['script'] == 'connect' || $_GET['script'] == 'kill')) {
    if (DB != '' || $_GET['refresh']) {
        restart_session();
        set_session('dbs', null);
    }connect_error();
    exit;
}$oe = 'RESTRICT|NO ACTION|CASCADE|SET NULL|SET DEFAULT';
class TmpFile
{
    public $handler;

    public $size;

    public function __construct()
    {
        $this->handler = tmpfile();
    }

    public function write($hb)
    {
        $this->size += strlen($hb);
        fwrite($this->handler, $hb);
    }

    public function send()
    {
        fseek($this->handler, 0);
        fpassthru($this->handler);
        fclose($this->handler);
    }
}$bc = "'(?:''|[^'\\\\]|\\\\.)*'";
$cd = 'IN|OUT|INOUT';
if (isset($_GET['select']) && ($_POST['edit'] || $_POST['clone']) && ! $_POST['save']) {
    $_GET['edit'] = $_GET['select'];
}if (isset($_GET['callf'])) {
    $_GET['call'] = $_GET['callf'];
}if (isset($_GET['function'])) {
    $_GET['procedure'] = $_GET['function'];
}if (isset($_GET['download'])) {
    $a = $_GET['download'];
    $m = fields($a);
    header('Content-Type: application/octet-stream');
    header('Content-Disposition: attachment; filename='.friendly_url("$a-".implode('_', $_GET['where'])).'.'.friendly_url($_GET['field']));
    $N = [idf_escape($_GET['field'])];
    $J = $j->select($a, $N, [where($_GET, $m)], $N);
    $L = ($J ? $J->fetch_row() : []);
    echo $j->value($L[0], $m[$_GET['field']]);
    exit;
} elseif (isset($_GET['table'])) {
    $a = $_GET['table'];
    $m = fields($a);
    if (! $m) {
        $k = error();
    }$R = table_status1($a, true);
    $E = $b->tableName($R);
    page_header(($m && is_view($R) ? $R['Engine'] == 'materialized view' ? 'Materialized view' : 'View' : 'Table').': '.($E != '' ? $E : h($a)), $k);
    $b->selectLinks($R);
    $bb = $R['Comment'];
    if ($bb != '') {
        echo "<p class='nowrap'>".'Comment'.': '.h($bb)."\n";
    }if ($m) {
        $b->tableStructurePrint($m);
    }if (! is_view($R)) {
        if (support('indexes')) {
            echo "<h3 id='indexes'>".'Indexes'."</h3>\n";
            $w = indexes($a);
            if ($w) {
                $b->tableIndexesPrint($w);
            }echo '<p class="links"><a href="'.h(ME).'indexes='.urlencode($a).'">'.'Alter indexes'."</a>\n";
        }if (fk_support($R)) {
            echo "<h3 id='foreign-keys'>".'Foreign keys'."</h3>\n";
            $o = foreign_keys($a);
            if ($o) {
                echo "<table cellspacing='0'>\n",'<thead><tr><th>'.'Source'.'<td>'.'Target'.'<td>'.'ON DELETE'.'<td>'.'ON UPDATE'."<td></thead>\n";
                foreach ($o as $E => $n) {
                    echo "<tr title='".h($E)."'>",'<th><i>'.implode('</i>, <i>', array_map('h', $n['source'])).'</i>',"<td><a href='".h($n['db'] != '' ? preg_replace('~db=[^&]*~', 'db='.urlencode($n['db']), ME) : ($n['ns'] != '' ? preg_replace('~ns=[^&]*~', 'ns='.urlencode($n['ns']), ME) : ME)).'table='.urlencode($n['table'])."'>".($n['db'] != '' ? '<b>'.h($n['db']).'</b>.' : '').($n['ns'] != '' ? '<b>'.h($n['ns']).'</b>.' : '').h($n['table']).'</a>','(<i>'.implode('</i>, <i>', array_map('h', $n['target'])).'</i>)','<td>'.h($n['on_delete'])."\n",'<td>'.h($n['on_update'])."\n",'<td><a href="'.h(ME.'foreign='.urlencode($a).'&name='.urlencode($E)).'">'.'Alter'.'</a>';
                }echo "</table>\n";
            }echo '<p class="links"><a href="'.h(ME).'foreign='.urlencode($a).'">'.'Add foreign key'."</a>\n";
        }
    }if (support(is_view($R) ? 'view_trigger' : 'trigger')) {
        echo "<h3 id='triggers'>".'Triggers'."</h3>\n";
        $Ug = triggers($a);
        if ($Ug) {
            echo "<table cellspacing='0'>\n";
            foreach ($Ug as $z => $X) {
                echo "<tr valign='top'><td>".h($X[0]).'<td>'.h($X[1]).'<th>'.h($z)."<td><a href='".h(ME.'trigger='.urlencode($a).'&name='.urlencode($z))."'>".'Alter'."</a>\n";
            }echo "</table>\n";
        }echo '<p class="links"><a href="'.h(ME).'trigger='.urlencode($a).'">'.'Add trigger'."</a>\n";
    }
} elseif (isset($_GET['schema'])) {
    page_header('Database schema', '', [], h(DB.($_GET['ns'] ? ".$_GET[ns]" : '')));
    $sg = [];
    $tg = [];
    $ea = ($_GET['schema'] ? $_GET['schema'] : $_COOKIE['adminer_schema-'.str_replace('.', '_', DB)]);
    preg_match_all('~([^:]+):([-0-9.]+)x([-0-9.]+)(_|$)~', $ea, $Gd, PREG_SET_ORDER);
    foreach ($Gd as $t => $C) {
        $sg[$C[1]] = [$C[2], $C[3]];
        $tg[] = "\n\t'".js_escape($C[1])."': [ $C[2], $C[3] ]";
    }$Mg = 0;
    $Ca = -1;
    $Hf = [];
    $tf = [];
    $xd = [];
    foreach (table_status('', true) as $Q => $R) {
        if (is_view($R)) {
            continue;
        }$We = 0;
        $Hf[$Q]['fields'] = [];
        foreach (fields($Q) as $E => $l) {
            $We += 1.25;
            $l['pos'] = $We;
            $Hf[$Q]['fields'][$E] = $l;
        }$Hf[$Q]['pos'] = ($sg[$Q] ? $sg[$Q] : [$Mg, 0]);
        foreach ($b->foreignKeys($Q) as $X) {
            if (! $X['db']) {
                $vd = $Ca;
                if ($sg[$Q][1] || $sg[$X['table']][1]) {
                    $vd = min(floatval($sg[$Q][1]), floatval($sg[$X['table']][1])) - 1;
                } else {
                    $Ca -= .1;
                }while ($xd[(string) $vd]) {
                    $vd -= .0001;
                }$Hf[$Q]['references'][$X['table']][(string) $vd] = [$X['source'], $X['target']];
                $tf[$X['table']][$Q][(string) $vd] = $X['target'];
                $xd[(string) $vd] = true;
            }
        }$Mg = max($Mg, $Hf[$Q]['pos'][0] + 2.5 + $We);
    }echo '<div id="schema" style="height: ',$Mg,'em;">
<script',nonce(),'>
qs(\'#schema\').onselectstart = function () { return false; };
var tablePos = {',implode(',', $tg)."\n",'};
var em = qs(\'#schema\').offsetHeight / ',$Mg,';
document.onmousemove = schemaMousemove;
document.onmouseup = partialArg(schemaMouseup, \'',js_escape(DB),'\');
</script>
';
    foreach ($Hf as $E => $Q) {
        echo "<div class='table' style='top: ".$Q['pos'][0].'em; left: '.$Q['pos'][1]."em;'>",'<a href="'.h(ME).'table='.urlencode($E).'"><b>'.h($E).'</b></a>',script("qsl('div').onmousedown = schemaMousedown;");
        foreach ($Q['fields'] as $l) {
            $X = '<span'.type_class($l['type']).' title="'.h($l['full_type'].($l['null'] ? ' NULL' : '')).'">'.h($l['field']).'</span>';
            echo '<br>'.($l['primary'] ? "<i>$X</i>" : $X);
        }foreach ((array) $Q['references'] as $zg => $uf) {
            foreach ($uf as $vd => $qf) {
                $wd = $vd - $sg[$E][1];
                $t = 0;
                foreach ($qf[0] as $Yf) {
                    echo "\n<div class='references' title='".h($zg)."' id='refs$vd-".($t++)."' style='left: $wd".'em; top: '.$Q['fields'][$Yf]['pos']."em; padding-top: .5em;'><div style='border-top: 1px solid Gray; width: ".(-$wd)."em;'></div></div>";
                }
            }
        }foreach ((array) $tf[$E] as $zg => $uf) {
            foreach ($uf as $vd => $d) {
                $wd = $vd - $sg[$E][1];
                $t = 0;
                foreach ($d as $yg) {
                    echo "\n<div class='references' title='".h($zg)."' id='refd$vd-".($t++)."' style='left: $wd".'em; top: '.$Q['fields'][$yg]['pos'].'em; height: 1.25em; background: url('.h(preg_replace('~\\?.*~', '', ME).'?file=arrow.gif) no-repeat right center;&version=4.8.1')."'><div style='height: .5em; border-bottom: 1px solid Gray; width: ".(-$wd)."em;'></div></div>";
                }
            }
        }echo "\n</div>\n";
    }foreach ($Hf as $E => $Q) {
        foreach ((array) $Q['references'] as $zg => $uf) {
            foreach ($uf as $vd => $qf) {
                $Sd = $Mg;
                $Kd = -10;
                foreach ($qf[0] as $z => $Yf) {
                    $Xe = $Q['pos'][0] + $Q['fields'][$Yf]['pos'];
                    $Ye = $Hf[$zg]['pos'][0] + $Hf[$zg]['fields'][$qf[1][$z]]['pos'];
                    $Sd = min($Sd, $Xe, $Ye);
                    $Kd = max($Kd, $Xe, $Ye);
                }echo "<div class='references' id='refl$vd' style='left: $vd"."em; top: $Sd"."em; padding: .5em 0;'><div style='border-right: 1px solid Gray; margin-top: 1px; height: ".($Kd - $Sd)."em;'></div></div>\n";
            }
        }
    }echo '</div>
<p class="links"><a href="',h(ME.'schema='.urlencode($ea)),'" id="schema-link">Permanent link</a>
';
} elseif (isset($_GET['dump'])) {
    $a = $_GET['dump'];
    if ($_POST && ! $k) {
        $kb = '';
        foreach (['output', 'format', 'db_style', 'routines', 'events', 'table_style', 'auto_increment', 'triggers', 'data_style'] as $z) {
            $kb .= "&$z=".urlencode($_POST[$z]);
        }cookie('adminer_export', substr($kb, 1));
        $S = array_flip((array) $_POST['tables']) + array_flip((array) $_POST['data']);
        $nc = dump_headers((count($S) == 1 ? key($S) : DB), (DB == '' || count($S) > 1));
        $kd = preg_match('~sql~', $_POST['format']);
        if ($kd) {
            echo "-- Adminer $ga ".$Kb[DRIVER].' '.str_replace("\n", ' ', $e->server_info)." dump\n\n";
            if ($y == 'sql') {
                echo "SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
".($_POST['data_style'] ? "SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';
" : '').'
';
                $e->query("SET time_zone = '+00:00'");
                $e->query("SET sql_mode = ''");
            }
        }$kg = $_POST['db_style'];
        $h = [DB];
        if (DB == '') {
            $h = $_POST['databases'];
            if (is_string($h)) {
                $h = explode("\n", rtrim(str_replace("\r", '', $h), "\n"));
            }
        }foreach ((array) $h as $i) {
            $b->dumpDatabase($i);
            if ($e->select_db($i)) {
                if ($kd && preg_match('~CREATE~', $kg) && ($g = $e->result('SHOW CREATE DATABASE '.idf_escape($i), 1))) {
                    set_utf8mb4($g);
                    if ($kg == 'DROP+CREATE') {
                        echo 'DROP DATABASE IF EXISTS '.idf_escape($i).";\n";
                    }echo "$g;\n";
                }if ($kd) {
                    if ($kg) {
                        echo use_sql($i).";\n\n";
                    }$Ee = '';
                    if ($_POST['routines']) {
                        foreach (['FUNCTION', 'PROCEDURE'] as $Cf) {
                            foreach (get_rows("SHOW $Cf STATUS WHERE Db = ".q($i), null, '-- ') as $L) {
                                $g = remove_definer($e->result("SHOW CREATE $Cf ".idf_escape($L['Name']), 2));
                                set_utf8mb4($g);
                                $Ee .= ($kg != 'DROP+CREATE' ? "DROP $Cf IF EXISTS ".idf_escape($L['Name']).";;\n" : '')."$g;;\n\n";
                            }
                        }
                    }if ($_POST['events']) {
                        foreach (get_rows('SHOW EVENTS', null, '-- ') as $L) {
                            $g = remove_definer($e->result('SHOW CREATE EVENT '.idf_escape($L['Name']), 3));
                            set_utf8mb4($g);
                            $Ee .= ($kg != 'DROP+CREATE' ? 'DROP EVENT IF EXISTS '.idf_escape($L['Name']).";;\n" : '')."$g;;\n\n";
                        }
                    }if ($Ee) {
                        echo "DELIMITER ;;\n\n$Ee"."DELIMITER ;\n\n";
                    }
                }if ($_POST['table_style'] || $_POST['data_style']) {
                    $th = [];
                    foreach (table_status('', true) as $E => $R) {
                        $Q = (DB == '' || in_array($E, (array) $_POST['tables']));
                        $sb = (DB == '' || in_array($E, (array) $_POST['data']));
                        if ($Q || $sb) {
                            if ($nc == 'tar') {
                                $Kg = new TmpFile;
                                ob_start([$Kg, 'write'], 1e5);
                            }$b->dumpTable($E, ($Q ? $_POST['table_style'] : ''), (is_view($R) ? 2 : 0));
                            if (is_view($R)) {
                                $th[] = $E;
                            } elseif ($sb) {
                                $m = fields($E);
                                $b->dumpData($E, $_POST['data_style'], 'SELECT *'.convert_fields($m, $m).' FROM '.table($E));
                            }if ($kd && $_POST['triggers'] && $Q && ($Ug = trigger_sql($E))) {
                                echo "\nDELIMITER ;;\n$Ug\nDELIMITER ;\n";
                            }if ($nc == 'tar') {
                                ob_end_flush();
                                tar_file((DB != '' ? '' : "$i/")."$E.csv", $Kg);
                            } elseif ($kd) {
                                echo "\n";
                            }
                        }
                    }if (function_exists('foreign_keys_sql')) {
                        foreach (table_status('', true) as $E => $R) {
                            $Q = (DB == '' || in_array($E, (array) $_POST['tables']));
                            if ($Q && ! is_view($R)) {
                                echo foreign_keys_sql($E);
                            }
                        }
                    }foreach ($th as $sh) {
                        $b->dumpTable($sh, $_POST['table_style'], 1);
                    }if ($nc == 'tar') {
                        echo pack('x512');
                    }
                }
            }
        }if ($kd) {
            echo '-- '.$e->result('SELECT NOW()')."\n";
        }exit;
    }page_header('Export', $k, ($_GET['export'] != '' ? ['table' => $_GET['export']] : []), h(DB));
    echo '
<form action="" method="post">
<table cellspacing="0" class="layout">
';
    $wb = ['', 'USE', 'DROP+CREATE', 'CREATE'];
    $ug = ['', 'DROP+CREATE', 'CREATE'];
    $tb = ['', 'TRUNCATE+INSERT', 'INSERT'];
    if ($y == 'sql') {
        $tb[] = 'INSERT+UPDATE';
    }parse_str($_COOKIE['adminer_export'], $L);
    if (! $L) {
        $L = ['output' => 'text', 'format' => 'sql', 'db_style' => (DB != '' ? '' : 'CREATE'), 'table_style' => 'DROP+CREATE', 'data_style' => 'INSERT'];
    }if (! isset($L['events'])) {
        $L['routines'] = $L['events'] = ($_GET['dump'] == '');
        $L['triggers'] = $L['table_style'];
    }echo '<tr><th>'.'Output'.'<td>'.html_select('output', $b->dumpOutput(), $L['output'], 0)."\n";
    echo '<tr><th>'.'Format'.'<td>'.html_select('format', $b->dumpFormat(), $L['format'], 0)."\n";
    echo ($y == 'sqlite' ? '' : '<tr><th>'.'Database'.'<td>'.html_select('db_style', $wb, $L['db_style']).(support('routine') ? checkbox('routines', 1, $L['routines'], 'Routines') : '').(support('event') ? checkbox('events', 1, $L['events'], 'Events') : '')),'<tr><th>'.'Tables'.'<td>'.html_select('table_style', $ug, $L['table_style']).checkbox('auto_increment', 1, $L['auto_increment'], 'Auto Increment').(support('trigger') ? checkbox('triggers', 1, $L['triggers'], 'Triggers') : ''),'<tr><th>'.'Data'.'<td>'.html_select('data_style', $tb, $L['data_style']),'</table>
<p><input type="submit" value="Export">
<input type="hidden" name="token" value="',$T,'">

<table cellspacing="0">
',script("qsl('table').onclick = dumpClick;");
    $bf = [];
    if (DB != '') {
        $Na = ($a != '' ? '' : ' checked');
        echo '<thead><tr>',"<th style='text-align: left;'><label class='block'><input type='checkbox' id='check-tables'$Na>".'Tables'.'</label>'.script("qs('#check-tables').onclick = partial(formCheck, /^tables\\[/);", ''),"<th style='text-align: right;'><label class='block'>".'Data'."<input type='checkbox' id='check-data'$Na></label>".script("qs('#check-data').onclick = partial(formCheck, /^data\\[/);", ''),"</thead>\n";
        $th = '';
        $vg = tables_list();
        foreach ($vg as $E => $U) {
            $af = preg_replace('~_.*~', '', $E);
            $Na = ($a == '' || $a == (substr($a, -1) == '%' ? "$af%" : $E));
            $df = '<tr><td>'.checkbox('tables[]', $E, $Na, $E, '', 'block');
            if ($U !== null && ! preg_match('~table~i', $U)) {
                $th .= "$df\n";
            } else {
                echo "$df<td align='right'><label class='block'><span id='Rows-".h($E)."'></span>".checkbox('data[]', $E, $Na)."</label>\n";
            }$bf[$af]++;
        }echo $th;
        if ($vg) {
            echo script("ajaxSetHtml('".js_escape(ME)."script=db');");
        }
    } else {
        echo "<thead><tr><th style='text-align: left;'>","<label class='block'><input type='checkbox' id='check-databases'".($a == '' ? ' checked' : '').'>'.'Database'.'</label>',script("qs('#check-databases').onclick = partial(formCheck, /^databases\\[/);", ''),"</thead>\n";
        $h = $b->databases();
        if ($h) {
            foreach ($h as $i) {
                if (! information_schema($i)) {
                    $af = preg_replace('~_.*~', '', $i);
                    echo '<tr><td>'.checkbox('databases[]', $i, $a == '' || $a == "$af%", $i, '', 'block')."\n";
                    $bf[$af]++;
                }
            }
        } else {
            echo "<tr><td><textarea name='databases' rows='10' cols='20'></textarea>";
        }
    }echo '</table>
</form>
';
    $xc = true;
    foreach ($bf as $z => $X) {
        if ($z != '' && $X > 1) {
            echo ($xc ? '<p>' : ' ')."<a href='".h(ME).'dump='.urlencode("$z%")."'>".h($z).'</a>';
            $xc = false;
        }
    }
} elseif (isset($_GET['privileges'])) {
    page_header('Privileges');
    echo '<p class="links"><a href="'.h(ME).'user=">'.'Create user'.'</a>';
    $J = $e->query('SELECT User, Host FROM mysql.'.(DB == '' ? 'user' : 'db WHERE '.q(DB).' LIKE Db').' ORDER BY Host, User');
    $r = $J;
    if (! $J) {
        $J = $e->query("SELECT SUBSTRING_INDEX(CURRENT_USER, '@', 1) AS User, SUBSTRING_INDEX(CURRENT_USER, '@', -1) AS Host");
    }echo "<form action=''><p>\n";
    hidden_fields_get();
    echo "<input type='hidden' name='db' value='".h(DB)."'>\n",($r ? '' : "<input type='hidden' name='grant' value=''>\n"),"<table cellspacing='0'>\n",'<thead><tr><th>'.'Username'.'<th>'.'Server'."<th></thead>\n";
    while ($L = $J->fetch_assoc()) {
        echo '<tr'.odd().'><td>'.h($L['User']).'<td>'.h($L['Host']).'<td><a href="'.h(ME.'user='.urlencode($L['User']).'&host='.urlencode($L['Host'])).'">'.'Edit'."</a>\n";
    }if (! $r || DB != '') {
        echo '<tr'.odd()."><td><input name='user' autocapitalize='off'><td><input name='host' value='localhost' autocapitalize='off'><td><input type='submit' value='".'Edit'."'>\n";
    }echo "</table>\n","</form>\n";
} elseif (isset($_GET['sql'])) {
    if (! $k && $_POST['export']) {
        dump_headers('sql');
        $b->dumpTable('', '');
        $b->dumpData('', 'table', $_POST['query']);
        exit;
    }restart_session();
    $Sc = &get_session('queries');
    $Rc = &$Sc[DB];
    if (! $k && $_POST['clear']) {
        $Rc = [];
        redirect(remove_from_uri('history'));
    }page_header((isset($_GET['import']) ? 'Import' : 'SQL command'), $k);
    if (! $k && $_POST) {
        $p = false;
        if (! isset($_GET['import'])) {
            $I = $_POST['query'];
        } elseif ($_POST['webfile']) {
            $bg = $b->importServerPath();
            $p = @fopen((file_exists($bg) ? $bg : "compress.zlib://$bg.gz"), 'rb');
            $I = ($p ? fread($p, 1e6) : false);
        } else {
            $I = get_file('sql_file', true);
        }if (is_string($I)) {
            if (function_exists('memory_get_usage')) {
                @ini_set('memory_limit', max(ini_bytes('memory_limit'), 2 * strlen($I) + memory_get_usage() + 8e6));
            }if ($I != '' && strlen($I) < 1e6) {
                $H = $I.(preg_match("~;[ \t\r\n]*\$~", $I) ? '' : ';');
                if (! $Rc || reset(end($Rc)) != $H) {
                    restart_session();
                    $Rc[] = [$H, time()];
                    set_session('queries', $Sc);
                    stop_session();
                }
            }$Zf = "(?:\\s|/\\*[\s\S]*?\\*/|(?:#|-- )[^\n]*\n?|--\r?\n)";
            $Cb = ';';
            $he = 0;
            $Yb = true;
            $f = connect();
            if (is_object($f) && DB != '') {
                $f->select_db(DB);
                if ($_GET['ns'] != '') {
                    set_schema($_GET['ns'], $f);
                }
            }$ab = 0;
            $dc = [];
            $Ke = '[\'"'.($y == 'sql' ? '`#' : ($y == 'sqlite' ? '`[' : ($y == 'mssql' ? '[' : ''))).']|/\*|-- |$'.($y == 'pgsql' ? '|\$[^$]*\$' : '');
            $Ng = microtime(true);
            parse_str($_COOKIE['adminer_export'], $la);
            $Pb = $b->dumpFormat();
            unset($Pb['sql']);
            while ($I != '') {
                if (! $he && preg_match("~^$Zf*+DELIMITER\\s+(\\S+)~i", $I, $C)) {
                    $Cb = $C[1];
                    $I = substr($I, strlen($C[0]));
                } else {
                    preg_match('('.preg_quote($Cb)."\\s*|$Ke)", $I, $C, PREG_OFFSET_CAPTURE, $he);
                    [$Cc, $We] = $C[0];
                    if (! $Cc && $p && ! feof($p)) {
                        $I .= fread($p, 1e5);
                    } else {
                        if (! $Cc && rtrim($I) == '') {
                            break;
                        }$he = $We + strlen($Cc);
                        if ($Cc && rtrim($Cc) != $Cb) {
                            while (preg_match('('.($Cc == '/*' ? '\*/' : ($Cc == '[' ? ']' : (preg_match('~^-- |^#~', $Cc) ? "\n" : preg_quote($Cc).'|\\\\.'))).'|$)s', $I, $C, PREG_OFFSET_CAPTURE, $he)) {
                                $Ff = $C[0][0];
                                if (! $Ff && $p && ! feof($p)) {
                                    $I .= fread($p, 1e5);
                                } else {
                                    $he = $C[0][1] + strlen($Ff);
                                    if ($Ff[0] != '\\') {
                                        break;
                                    }
                                }
                            }
                        } else {
                            $Yb = false;
                            $H = substr($I, 0, $We);
                            $ab++;
                            $df = "<pre id='sql-$ab'><code class='jush-$y'>".$b->sqlCommandQuery($H)."</code></pre>\n";
                            if ($y == 'sqlite' && preg_match("~^$Zf*+ATTACH\\b~i", $H, $C)) {
                                echo $df,"<p class='error'>".'ATTACH queries are not supported.'."\n";
                                $dc[] = " <a href='#sql-$ab'>$ab</a>";
                                if ($_POST['error_stops']) {
                                    break;
                                }
                            } else {
                                if (! $_POST['only_errors']) {
                                    echo $df;
                                    ob_flush();
                                    flush();
                                }$eg = microtime(true);
                                if ($e->multi_query($H) && is_object($f) && preg_match("~^$Zf*+USE\\b~i", $H)) {
                                    $f->query($H);
                                }do {
                                    $J = $e->store_result();
                                    if ($e->error) {
                                        echo ($_POST['only_errors'] ? $df : ''),"<p class='error'>".'Error in query'.($e->errno ? " ($e->errno)" : '').': '.error()."\n";
                                        $dc[] = " <a href='#sql-$ab'>$ab</a>";
                                        if ($_POST['error_stops']) {
                                            break 2;
                                        }
                                    } else {
                                        $Dg = " <span class='time'>(".format_time($eg).')</span>'.(strlen($H) < 1000 ? " <a href='".h(ME).'sql='.urlencode(trim($H))."'>".'Edit'.'</a>' : '');
                                        $na = $e->affected_rows;
                                        $wh = ($_POST['only_errors'] ? '' : $j->warnings());
                                        $xh = "warnings-$ab";
                                        if ($wh) {
                                            $Dg .= ", <a href='#$xh'>".'Warnings'.'</a>'.script("qsl('a').onclick = partial(toggle, '$xh');", '');
                                        }$lc = null;
                                        $mc = "explain-$ab";
                                        if (is_object($J)) {
                                            $_ = $_POST['limit'];
                                            $ze = select($J, $f, [], $_);
                                            if (! $_POST['only_errors']) {
                                                echo "<form action='' method='post'>\n";
                                                $ee = $J->num_rows;
                                                echo '<p>'.($ee ? ($_ && $ee > $_ ? sprintf('%d / ', $_) : '').lang(['%d row', '%d rows'], $ee) : ''),$Dg;
                                                if ($f && preg_match("~^($Zf|\\()*+SELECT\\b~i", $H) && ($lc = explain($f, $H))) {
                                                    echo ", <a href='#$mc'>Explain</a>".script("qsl('a').onclick = partial(toggle, '$mc');", '');
                                                }$u = "export-$ab";
                                                echo ", <a href='#$u'>".'Export'.'</a>'.script("qsl('a').onclick = partial(toggle, '$u');", '')."<span id='$u' class='hidden'>: ".html_select('output', $b->dumpOutput(), $la['output']).' '.html_select('format', $Pb, $la['format'])."<input type='hidden' name='query' value='".h($H)."'>"." <input type='submit' name='export' value='".'Export'."'><input type='hidden' name='token' value='$T'></span>\n"."</form>\n";
                                            }
                                        } else {
                                            if (preg_match("~^$Zf*+(CREATE|DROP|ALTER)$Zf++(DATABASE|SCHEMA)\\b~i", $H)) {
                                                restart_session();
                                                set_session('dbs', null);
                                                stop_session();
                                            }if (! $_POST['only_errors']) {
                                                echo "<p class='message' title='".h($e->info)."'>".lang(['Query executed OK, %d row affected.', 'Query executed OK, %d rows affected.'], $na)."$Dg\n";
                                            }
                                        }echo $wh ? "<div id='$xh' class='hidden'>\n$wh</div>\n" : '';
                                        if ($lc) {
                                            echo "<div id='$mc' class='hidden'>\n";
                                            select($lc, $f, $ze);
                                            echo "</div>\n";
                                        }
                                    }$eg = microtime(true);
                                } while ($e->next_result());
                            }$I = substr($I, $he);
                            $he = 0;
                        }
                    }
                }
            }if ($Yb) {
                echo "<p class='message'>".'No commands to execute.'."\n";
            } elseif ($_POST['only_errors']) {
                echo "<p class='message'>".lang(['%d query executed OK.', '%d queries executed OK.'], $ab - count($dc))," <span class='time'>(".format_time($Ng).")</span>\n";
            } elseif ($dc && $ab > 1) {
                echo "<p class='error'>".'Error in query'.': '.implode('', $dc)."\n";
            }
        } else {
            echo "<p class='error'>".upload_error($I)."\n";
        }
    }echo '
<form action="" method="post" enctype="multipart/form-data" id="form">
';
    $jc = "<input type='submit' value='".'Execute'."' title='Ctrl+Enter'>";
    if (! isset($_GET['import'])) {
        $H = $_GET['sql'];
        if ($_POST) {
            $H = $_POST['query'];
        } elseif ($_GET['history'] == 'all') {
            $H = $Rc;
        } elseif ($_GET['history'] != '') {
            $H = $Rc[$_GET['history']][0];
        }echo '<p>';
        textarea('query', $H, 20);
        echo script(($_POST ? '' : "qs('textarea').focus();\n")."qs('#form').onsubmit = partial(sqlSubmit, qs('#form'), '".js_escape(remove_from_uri('sql|limit|error_stops|only_errors|history'))."');"),"<p>$jc\n",'Limit rows'.": <input type='number' name='limit' class='size' value='".h($_POST ? $_POST['limit'] : $_GET['limit'])."'>\n";
    } else {
        echo '<fieldset><legend>'.'File upload'.'</legend><div>';
        $Kc = (extension_loaded('zlib') ? '[.gz]' : '');
        echo (ini_bool('file_uploads') ? "SQL$Kc (&lt; ".ini_get('upload_max_filesize')."B): <input type='file' name='sql_file[]' multiple>\n$jc" : 'File uploads are disabled.'),"</div></fieldset>\n";
        $Yc = $b->importServerPath();
        if ($Yc) {
            echo '<fieldset><legend>'.'From server'.'</legend><div>',sprintf('Webserver file %s', '<code>'.h($Yc)."$Kc</code>"),' <input type="submit" name="webfile" value="'.'Run file'.'">',"</div></fieldset>\n";
        }echo '<p>';
    }echo checkbox('error_stops', 1, ($_POST ? $_POST['error_stops'] : isset($_GET['import']) || $_GET['error_stops']), 'Stop on error')."\n",checkbox('only_errors', 1, ($_POST ? $_POST['only_errors'] : isset($_GET['import']) || $_GET['only_errors']), 'Show only errors')."\n","<input type='hidden' name='token' value='$T'>\n";
    if (! isset($_GET['import']) && $Rc) {
        print_fieldset('history', 'History', $_GET['history'] != '');
        for ($X = end($Rc); $X; $X = prev($Rc)) {
            $z = key($Rc);
            [$H, $Dg, $Tb] = $X;
            echo '<a href="'.h(ME."sql=&history=$z").'">'.'Edit'.'</a>'." <span class='time' title='".@date('Y-m-d', $Dg)."'>".@date('H:i:s', $Dg).'</span>'." <code class='jush-$y'>".shorten_utf8(ltrim(str_replace("\n", ' ', str_replace("\r", '', preg_replace('~^(#|-- ).*~m', '', $H)))), 80, '</code>').($Tb ? " <span class='time'>($Tb)</span>" : '')."<br>\n";
        }echo "<input type='submit' name='clear' value='".'Clear'."'>\n","<a href='".h(ME.'sql=&history=all')."'>".'Edit all'."</a>\n","</div></fieldset>\n";
    }echo '</form>
';
} elseif (isset($_GET['edit'])) {
    $a = $_GET['edit'];
    $m = fields($a);
    $Z = (isset($_GET['select']) ? ($_POST['check'] && count($_POST['check']) == 1 ? where_check($_POST['check'][0], $m) : '') : where($_GET, $m));
    $fh = (isset($_GET['select']) ? $_POST['edit'] : $Z);
    foreach ($m as $E => $l) {
        if (! isset($l['privileges'][$fh ? 'update' : 'insert']) || $b->fieldName($l) == '' || $l['generated']) {
            unset($m[$E]);
        }
    }if ($_POST && ! $k && ! isset($_GET['select'])) {
        $B = $_POST['referer'];
        if ($_POST['insert']) {
            $B = ($fh ? null : $_SERVER['REQUEST_URI']);
        } elseif (! preg_match('~^.+&select=.+$~', $B)) {
            $B = ME.'select='.urlencode($a);
        }$w = indexes($a);
        $ah = unique_array($_GET['where'], $w);
        $mf = "\nWHERE $Z";
        if (isset($_POST['delete'])) {
            queries_redirect($B, 'Item has been deleted.', $j->delete($a, $mf, ! $ah));
        } else {
            $P = [];
            foreach ($m as $E => $l) {
                $X = process_input($l);
                if ($X !== false && $X !== null) {
                    $P[idf_escape($E)] = $X;
                }
            }if ($fh) {
                if (! $P) {
                    redirect($B);
                }queries_redirect($B, 'Item has been updated.', $j->update($a, $P, $mf, ! $ah));
                if (is_ajax()) {
                    page_headers();
                    page_messages($k);
                    exit;
                }
            } else {
                $J = $j->insert($a, $P);
                $ud = ($J ? last_id() : 0);
                queries_redirect($B, sprintf('Item%s has been inserted.', ($ud ? " $ud" : '')), $J);
            }
        }
    }$L = null;
    if ($_POST['save']) {
        $L = (array) $_POST['fields'];
    } elseif ($Z) {
        $N = [];
        foreach ($m as $E => $l) {
            if (isset($l['privileges']['select'])) {
                $ua = convert_field($l);
                if ($_POST['clone'] && $l['auto_increment']) {
                    $ua = "''";
                }if ($y == 'sql' && preg_match('~enum|set~', $l['type'])) {
                    $ua = '1*'.idf_escape($E);
                }$N[] = ($ua ? "$ua AS " : '').idf_escape($E);
            }
        }$L = [];
        if (! support('table')) {
            $N = ['*'];
        }if ($N) {
            $J = $j->select($a, $N, [$Z], $N, [], (isset($_GET['select']) ? 2 : 1));
            if (! $J) {
                $k = error();
            } else {
                $L = $J->fetch_assoc();
                if (! $L) {
                    $L = false;
                }
            }if (isset($_GET['select']) && (! $L || $J->fetch_assoc())) {
                $L = null;
            }
        }
    }if (! support('table') && ! $m) {
        if (! $Z) {
            $J = $j->select($a, ['*'], $Z, ['*']);
            $L = ($J ? $J->fetch_assoc() : false);
            if (! $L) {
                $L = [$j->primary => ''];
            }
        }if ($L) {
            foreach ($L as $z => $X) {
                if (! $Z) {
                    $L[$z] = null;
                }$m[$z] = ['field' => $z, 'null' => ($z != $j->primary), 'auto_increment' => ($z == $j->primary)];
            }
        }
    }edit_form($a, $m, $L, $fh);
} elseif (isset($_GET['create'])) {
    $a = $_GET['create'];
    $Le = [];
    foreach (['HASH', 'LINEAR HASH', 'KEY', 'LINEAR KEY', 'RANGE', 'LIST'] as $z) {
        $Le[$z] = $z;
    }$sf = referencable_primary($a);
    $o = [];
    foreach ($sf as $rg => $l) {
        $o[str_replace('`', '``', $rg).'`'.str_replace('`', '``', $l['field'])] = $rg;
    }$Be = [];
    $R = [];
    if ($a != '') {
        $Be = fields($a);
        $R = table_status($a);
        if (! $R) {
            $k = 'No tables.';
        }
    }$L = $_POST;
    $L['fields'] = (array) $L['fields'];
    if ($L['auto_increment_col']) {
        $L['fields'][$L['auto_increment_col']]['auto_increment'] = true;
    }if ($_POST) {
        set_adminer_settings(['comments' => $_POST['comments'], 'defaults' => $_POST['defaults']]);
    }if ($_POST && ! process_fields($L['fields']) && ! $k) {
        if ($_POST['drop']) {
            queries_redirect(substr(ME, 0, -1), 'Table has been dropped.', drop_tables([$a]));
        } else {
            $m = [];
            $ra = [];
            $jh = false;
            $_c = [];
            $Ae = reset($Be);
            $pa = ' FIRST';
            foreach ($L['fields'] as $z => $l) {
                $n = $o[$l['type']];
                $Vg = ($n !== null ? $sf[$n] : $l);
                if ($l['field'] != '') {
                    if (! $l['has_default']) {
                        $l['default'] = null;
                    }if ($z == $L['auto_increment_col']) {
                        $l['auto_increment'] = true;
                    }$if = process_field($l, $Vg);
                    $ra[] = [$l['orig'], $if, $pa];
                    if (! $Ae || $if != process_field($Ae, $Ae)) {
                        $m[] = [$l['orig'], $if, $pa];
                        if ($l['orig'] != '' || $pa) {
                            $jh = true;
                        }
                    }if ($n !== null) {
                        $_c[idf_escape($l['field'])] = ($a != '' && $y != 'sqlite' ? 'ADD' : ' ').format_foreign_key(['table' => $o[$l['type']], 'source' => [$l['field']], 'target' => [$Vg['field']], 'on_delete' => $l['on_delete']]);
                    }$pa = ' AFTER '.idf_escape($l['field']);
                } elseif ($l['orig'] != '') {
                    $jh = true;
                    $m[] = [$l['orig']];
                }if ($l['orig'] != '') {
                    $Ae = next($Be);
                    if (! $Ae) {
                        $pa = '';
                    }
                }
            }$Ne = '';
            if ($Le[$L['partition_by']]) {
                $Oe = [];
                if ($L['partition_by'] == 'RANGE' || $L['partition_by'] == 'LIST') {
                    foreach (array_filter($L['partition_names']) as $z => $X) {
                        $Y = $L['partition_values'][$z];
                        $Oe[] = "\n  PARTITION ".idf_escape($X).' VALUES '.($L['partition_by'] == 'RANGE' ? 'LESS THAN' : 'IN').($Y != '' ? " ($Y)" : ' MAXVALUE');
                    }
                }$Ne .= "\nPARTITION BY $L[partition_by]($L[partition])".($Oe ? ' ('.implode(',', $Oe)."\n)" : ($L['partitions'] ? ' PARTITIONS '.(+$L['partitions']) : ''));
            } elseif (support('partitioning') && preg_match('~partitioned~', $R['Create_options'])) {
                $Ne .= "\nREMOVE PARTITIONING";
            }$D = 'Table has been altered.';
            if ($a == '') {
                cookie('adminer_engine', $L['Engine']);
                $D = 'Table has been created.';
            }$E = trim($L['name']);
            queries_redirect(ME.(support('table') ? 'table=' : 'select=').urlencode($E), $D, alter_table($a, $E, ($y == 'sqlite' && ($jh || $_c) ? $ra : $m), $_c, ($L['Comment'] != $R['Comment'] ? $L['Comment'] : null), ($L['Engine'] && $L['Engine'] != $R['Engine'] ? $L['Engine'] : ''), ($L['Collation'] && $L['Collation'] != $R['Collation'] ? $L['Collation'] : ''), ($L['Auto_increment'] != '' ? number($L['Auto_increment']) : ''), $Ne));
        }
    }page_header(($a != '' ? 'Alter table' : 'Create table'), $k, ['table' => $a], h($a));
    if (! $_POST) {
        $L = ['Engine' => $_COOKIE['adminer_engine'], 'fields' => [['field' => '', 'type' => (isset($Xg['int']) ? 'int' : (isset($Xg['integer']) ? 'integer' : '')), 'on_update' => '']], 'partition_names' => ['']];
        if ($a != '') {
            $L = $R;
            $L['name'] = $a;
            $L['fields'] = [];
            if (! $_GET['auto_increment']) {
                $L['Auto_increment'] = '';
            }foreach ($Be as $l) {
                $l['has_default'] = isset($l['default']);
                $L['fields'][] = $l;
            }if (support('partitioning')) {
                $Ec = 'FROM information_schema.PARTITIONS WHERE TABLE_SCHEMA = '.q(DB).' AND TABLE_NAME = '.q($a);
                $J = $e->query("SELECT PARTITION_METHOD, PARTITION_ORDINAL_POSITION, PARTITION_EXPRESSION $Ec ORDER BY PARTITION_ORDINAL_POSITION DESC LIMIT 1");
                [$L['partition_by'], $L['partitions'], $L['partition']] = $J->fetch_row();
                $Oe = get_key_vals("SELECT PARTITION_NAME, PARTITION_DESCRIPTION $Ec AND PARTITION_NAME != '' ORDER BY PARTITION_ORDINAL_POSITION");
                $Oe[''] = '';
                $L['partition_names'] = array_keys($Oe);
                $L['partition_values'] = array_values($Oe);
            }
        }
    }$Xa = collations();
    $ac = engines();
    foreach ($ac as $Zb) {
        if (! strcasecmp($Zb, $L['Engine'])) {
            $L['Engine'] = $Zb;
            break;
        }
    }echo '
<form action="" method="post" id="form">
<p>
';
    if (support('columns') || $a == '') {
        echo 'Table name: <input name="name" data-maxlength="64" value="',h($L['name']),'" autocapitalize="off">
';
        if ($a == '' && ! $_POST) {
            echo script("focus(qs('#form')['name']);");
        }echo ($ac ? "<select name='Engine'>".optionlist(['' => '('.'engine'.')'] + $ac, $L['Engine']).'</select>'.on_help('getTarget(event).value', 1).script("qsl('select').onchange = helpClose;") : ''),' ',($Xa && ! preg_match('~sqlite|mssql~', $y) ? html_select('Collation', ['' => '('.'collation'.')'] + $Xa, $L['Collation']) : ''),' <input type="submit" value="Save">
';
    }echo '
';
    if (support('columns')) {
        echo '<div class="scrollable">
<table cellspacing="0" id="edit-fields" class="nowrap">
';
        edit_fields($L['fields'], $Xa, 'TABLE', $o);
        echo '</table>
',script('editFields();'),'</div>
<p>
Auto Increment: <input type="number" name="Auto_increment" size="6" value="',h($L['Auto_increment']),'">
',checkbox('defaults', 1, ($_POST ? $_POST['defaults'] : adminer_setting('defaults')), 'Default values', 'columnShow(this.checked, 5)', 'jsonly'),(support('comment') ? checkbox('comments', 1, ($_POST ? $_POST['comments'] : adminer_setting('comments')), 'Comment', 'editingCommentsClick(this, true);', 'jsonly').' <input name="Comment" value="'.h($L['Comment']).'" data-maxlength="'.(min_version(5.5) ? 2048 : 60).'">' : ''),'<p>
<input type="submit" value="Save">
';
    }echo '
';
    if ($a != '') {
        echo '<input type="submit" name="drop" value="Drop">',confirm(sprintf('Drop %s?', $a));
    }if (support('partitioning')) {
        $Me = preg_match('~RANGE|LIST~', $L['partition_by']);
        print_fieldset('partition', 'Partition by', $L['partition_by']);
        echo '<p>
',"<select name='partition_by'>".optionlist(['' => ''] + $Le, $L['partition_by']).'</select>'.on_help("getTarget(event).value.replace(/./, 'PARTITION BY \$&')", 1).script("qsl('select').onchange = partitionByChange;"),'(<input name="partition" value="',h($L['partition']),'">)
Partitions: <input type="number" name="partitions" class="size',($Me || ! $L['partition_by'] ? ' hidden' : ''),'" value="',h($L['partitions']),'">
<table cellspacing="0" id="partition-table"',($Me ? '' : " class='hidden'"),'>
<thead><tr><th>Partition name<th>Values</thead>
';
        foreach ($L['partition_names'] as $z => $X) {
            echo '<tr>','<td><input name="partition_names[]" value="'.h($X).'" autocapitalize="off">',($z == count($L['partition_names']) - 1 ? script("qsl('input').oninput = partitionNameChange;") : ''),'<td><input name="partition_values[]" value="'.h($L['partition_values'][$z]).'">';
        }echo '</table>
</div></fieldset>
';
    }echo '<input type="hidden" name="token" value="',$T,'">
</form>
';
} elseif (isset($_GET['indexes'])) {
    $a = $_GET['indexes'];
    $ad = ['PRIMARY', 'UNIQUE', 'INDEX'];
    $R = table_status($a, true);
    if (preg_match('~MyISAM|M?aria'.(min_version(5.6, '10.0.5') ? '|InnoDB' : '').'~i', $R['Engine'])) {
        $ad[] = 'FULLTEXT';
    }if (preg_match('~MyISAM|M?aria'.(min_version(5.7, '10.2.2') ? '|InnoDB' : '').'~i', $R['Engine'])) {
        $ad[] = 'SPATIAL';
    }$w = indexes($a);
    $cf = [];
    if ($y == 'mongo') {
        $cf = $w['_id_'];
        unset($ad[0]);
        unset($w['_id_']);
    }$L = $_POST;
    if ($_POST && ! $k && ! $_POST['add'] && ! $_POST['drop_col']) {
        $sa = [];
        foreach ($L['indexes'] as $v) {
            $E = $v['name'];
            if (in_array($v['type'], $ad)) {
                $d = [];
                $_d = [];
                $Eb = [];
                $P = [];
                ksort($v['columns']);
                foreach ($v['columns'] as $z => $c) {
                    if ($c != '') {
                        $zd = $v['lengths'][$z];
                        $Db = $v['descs'][$z];
                        $P[] = idf_escape($c).($zd ? '('.(+$zd).')' : '').($Db ? ' DESC' : '');
                        $d[] = $c;
                        $_d[] = ($zd ? $zd : null);
                        $Eb[] = $Db;
                    }
                }if ($d) {
                    $kc = $w[$E];
                    if ($kc) {
                        ksort($kc['columns']);
                        ksort($kc['lengths']);
                        ksort($kc['descs']);
                        if ($v['type'] == $kc['type'] && array_values($kc['columns']) === $d && (! $kc['lengths'] || array_values($kc['lengths']) === $_d) && array_values($kc['descs']) === $Eb) {
                            unset($w[$E]);

                            continue;
                        }
                    }$sa[] = [$v['type'], $E, $P];
                }
            }
        }foreach ($w as $E => $kc) {
            $sa[] = [$kc['type'], $E, 'DROP'];
        }if (! $sa) {
            redirect(ME.'table='.urlencode($a));
        }queries_redirect(ME.'table='.urlencode($a), 'Indexes have been altered.', alter_indexes($a, $sa));
    }page_header('Indexes', $k, ['table' => $a], h($a));
    $m = array_keys(fields($a));
    if ($_POST['add']) {
        foreach ($L['indexes'] as $z => $v) {
            if ($v['columns'][count($v['columns'])] != '') {
                $L['indexes'][$z]['columns'][] = '';
            }
        }$v = end($L['indexes']);
        if ($v['type'] || array_filter($v['columns'], 'strlen')) {
            $L['indexes'][] = ['columns' => [1 => '']];
        }
    }if (! $L) {
        foreach ($w as $z => $v) {
            $w[$z]['name'] = $z;
            $w[$z]['columns'][] = '';
        }$w[] = ['columns' => [1 => '']];
        $L['indexes'] = $w;
    }echo '
<form action="" method="post">
<div class="scrollable">
<table cellspacing="0" class="nowrap">
<thead><tr>
<th id="label-type">Index Type
<th><input type="submit" class="wayoff">Column (length)
<th id="label-name">Name
<th><noscript>',"<input type='image' class='icon' name='add[0]' src='".h(preg_replace('~\\?.*~', '', ME).'?file=plus.gif&version=4.8.1')."' alt='+' title='".'Add next'."'>",'</noscript>
</thead>
';
    if ($cf) {
        echo '<tr><td>PRIMARY<td>';
        foreach ($cf['columns'] as $z => $c) {
            echo select_input(' disabled', $m, $c),"<label><input disabled type='checkbox'>".'descending'.'</label> ';
        }echo "<td><td>\n";
    }$x = 1;
    foreach ($L['indexes'] as $v) {
        if (! $_POST['drop_col'] || $x != key($_POST['drop_col'])) {
            echo '<tr><td>'.html_select("indexes[$x][type]", [-1 => ''] + $ad, $v['type'], ($x == count($L['indexes']) ? 'indexesAddRow.call(this);' : 1), 'label-type'),'<td>';
            ksort($v['columns']);
            $t = 1;
            foreach ($v['columns'] as $z => $c) {
                echo '<span>'.select_input(" name='indexes[$x][columns][$t]' title='".'Column'."'", ($m ? array_combine($m, $m) : $m), $c, 'partial('.($t == count($v['columns']) ? 'indexesAddColumn' : 'indexesChangeColumn').", '".js_escape($y == 'sql' ? '' : $_GET['indexes'].'_')."')"),($y == 'sql' || $y == 'mssql' ? "<input type='number' name='indexes[$x][lengths][$t]' class='size' value='".h($v['lengths'][$z])."' title='".'Length'."'>" : ''),(support('descidx') ? checkbox("indexes[$x][descs][$t]", 1, $v['descs'][$z], 'descending') : ''),' </span>';
                $t++;
            }echo "<td><input name='indexes[$x][name]' value='".h($v['name'])."' autocapitalize='off' aria-labelledby='label-name'>\n","<td><input type='image' class='icon' name='drop_col[$x]' src='".h(preg_replace('~\\?.*~', '', ME).'?file=cross.gif&version=4.8.1')."' alt='x' title='".'Remove'."'>".script("qsl('input').onclick = partial(editingRemoveRow, 'indexes\$1[type]');");
        }$x++;
    }echo '</table>
</div>
<p>
<input type="submit" value="Save">
<input type="hidden" name="token" value="',$T,'">
</form>
';
} elseif (isset($_GET['database'])) {
    $L = $_POST;
    if ($_POST && ! $k && ! isset($_POST['add_x'])) {
        $E = trim($L['name']);
        if ($_POST['drop']) {
            $_GET['db'] = '';
            queries_redirect(remove_from_uri('db|database'), 'Database has been dropped.', drop_databases([DB]));
        } elseif ($E !== DB) {
            if (DB != '') {
                $_GET['db'] = $E;
                queries_redirect(preg_replace('~\bdb=[^&]*&~', '', ME).'db='.urlencode($E), 'Database has been renamed.', rename_database($E, $L['collation']));
            } else {
                $h = explode("\n", str_replace("\r", '', $E));
                $lg = true;
                $td = '';
                foreach ($h as $i) {
                    if (count($h) == 1 || $i != '') {
                        if (! create_database($i, $L['collation'])) {
                            $lg = false;
                        }$td = $i;
                    }
                }restart_session();
                set_session('dbs', null);
                queries_redirect(ME.'db='.urlencode($td), 'Database has been created.', $lg);
            }
        } else {
            if (! $L['collation']) {
                redirect(substr(ME, 0, -1));
            }query_redirect('ALTER DATABASE '.idf_escape($E).(preg_match('~^[a-z0-9_]+$~i', $L['collation']) ? " COLLATE $L[collation]" : ''), substr(ME, 0, -1), 'Database has been altered.');
        }
    }page_header(DB != '' ? 'Alter database' : 'Create database', $k, [], h(DB));
    $Xa = collations();
    $E = DB;
    if ($_POST) {
        $E = $L['name'];
    } elseif (DB != '') {
        $L['collation'] = db_collation(DB, $Xa);
    } elseif ($y == 'sql') {
        foreach (get_vals('SHOW GRANTS') as $r) {
            if (preg_match('~ ON (`(([^\\\\`]|``|\\\\.)*)%`\.\*)?~', $r, $C) && $C[1]) {
                $E = stripcslashes(idf_unescape("`$C[2]`"));
                break;
            }
        }
    }echo '
<form action="" method="post">
<p>
',($_POST['add_x'] || strpos($E, "\n") ? '<textarea id="name" name="name" rows="10" cols="40">'.h($E).'</textarea><br>' : '<input name="name" id="name" value="'.h($E).'" data-maxlength="64" autocapitalize="off">')."\n".($Xa ? html_select('collation', ['' => '('.'collation'.')'] + $Xa, $L['collation']).doc_link(['sql' => 'charset-charsets.html', 'mariadb' => 'supported-character-sets-and-collations/']) : ''),script("focus(qs('#name'));"),'<input type="submit" value="Save">
';
    if (DB != '') {
        echo "<input type='submit' name='drop' value='".'Drop'."'>".confirm(sprintf('Drop %s?', DB))."\n";
    } elseif (! $_POST['add_x'] && $_GET['db'] == '') {
        echo "<input type='image' class='icon' name='add' src='".h(preg_replace('~\\?.*~', '', ME).'?file=plus.gif&version=4.8.1')."' alt='+' title='".'Add next'."'>\n";
    }echo '<input type="hidden" name="token" value="',$T,'">
</form>
';
} elseif (isset($_GET['call'])) {
    $da = ($_GET['name'] ? $_GET['name'] : $_GET['call']);
    page_header('Call'.': '.h($da), $k);
    $Cf = routine($_GET['call'], (isset($_GET['callf']) ? 'FUNCTION' : 'PROCEDURE'));
    $Zc = [];
    $Ee = [];
    foreach ($Cf['fields'] as $t => $l) {
        if (substr($l['inout'], -3) == 'OUT') {
            $Ee[$t] = '@'.idf_escape($l['field']).' AS '.idf_escape($l['field']);
        }if (! $l['inout'] || substr($l['inout'], 0, 2) == 'IN') {
            $Zc[] = $t;
        }
    }if (! $k && $_POST) {
        $Ja = [];
        foreach ($Cf['fields'] as $z => $l) {
            if (in_array($z, $Zc)) {
                $X = process_input($l);
                if ($X === false) {
                    $X = "''";
                }if (isset($Ee[$z])) {
                    $e->query('SET @'.idf_escape($l['field'])." = $X");
                }
            }$Ja[] = (isset($Ee[$z]) ? '@'.idf_escape($l['field']) : $X);
        }$I = (isset($_GET['callf']) ? 'SELECT' : 'CALL').' '.table($da).'('.implode(', ', $Ja).')';
        $eg = microtime(true);
        $J = $e->multi_query($I);
        $na = $e->affected_rows;
        echo $b->selectQuery($I, $eg, ! $J);
        if (! $J) {
            echo "<p class='error'>".error()."\n";
        } else {
            $f = connect();
            if (is_object($f)) {
                $f->select_db(DB);
            }do {
                $J = $e->store_result();
                if (is_object($J)) {
                    select($J, $f);
                } else {
                    echo "<p class='message'>".lang(['Routine has been called, %d row affected.', 'Routine has been called, %d rows affected.'], $na)." <span class='time'>".@date('H:i:s')."</span>\n";
                }
            } while ($e->next_result());
            if ($Ee) {
                select($e->query('SELECT '.implode(', ', $Ee)));
            }
        }
    }echo '
<form action="" method="post">
';
    if ($Zc) {
        echo "<table cellspacing='0' class='layout'>\n";
        foreach ($Zc as $z) {
            $l = $Cf['fields'][$z];
            $E = $l['field'];
            echo '<tr><th>'.$b->fieldName($l);
            $Y = $_POST['fields'][$E];
            if ($Y != '') {
                if ($l['type'] == 'enum') {
                    $Y = +$Y;
                }if ($l['type'] == 'set') {
                    $Y = array_sum($Y);
                }
            }input($l, $Y, (string) $_POST['function'][$E]);
            echo "\n";
        }echo "</table>\n";
    }echo '<p>
<input type="submit" value="Call">
<input type="hidden" name="token" value="',$T,'">
</form>
';
} elseif (isset($_GET['foreign'])) {
    $a = $_GET['foreign'];
    $E = $_GET['name'];
    $L = $_POST;
    if ($_POST && ! $k && ! $_POST['add'] && ! $_POST['change'] && ! $_POST['change-js']) {
        $D = ($_POST['drop'] ? 'Foreign key has been dropped.' : ($E != '' ? 'Foreign key has been altered.' : 'Foreign key has been created.'));
        $B = ME.'table='.urlencode($a);
        if (! $_POST['drop']) {
            $L['source'] = array_filter($L['source'], 'strlen');
            ksort($L['source']);
            $yg = [];
            foreach ($L['source'] as $z => $X) {
                $yg[$z] = $L['target'][$z];
            }$L['target'] = $yg;
        }if ($y == 'sqlite') {
            queries_redirect($B, $D, recreate_table($a, $a, [], [], [" $E" => ($_POST['drop'] ? '' : ' '.format_foreign_key($L))]));
        } else {
            $sa = 'ALTER TABLE '.table($a);
            $Lb = "\nDROP ".($y == 'sql' ? 'FOREIGN KEY ' : 'CONSTRAINT ').idf_escape($E);
            if ($_POST['drop']) {
                query_redirect($sa.$Lb, $B, $D);
            } else {
                query_redirect($sa.($E != '' ? "$Lb," : '')."\nADD".format_foreign_key($L), $B, $D);
                $k = 'Source and target columns must have the same data type, there must be an index on the target columns and referenced data must exist.'."<br>$k";
            }
        }
    }page_header('Foreign key', $k, ['table' => $a], h($a));
    if ($_POST) {
        ksort($L['source']);
        if ($_POST['add']) {
            $L['source'][] = '';
        } elseif ($_POST['change'] || $_POST['change-js']) {
            $L['target'] = [];
        }
    } elseif ($E != '') {
        $o = foreign_keys($a);
        $L = $o[$E];
        $L['source'][] = '';
    } else {
        $L['table'] = $a;
        $L['source'] = [''];
    }echo '
<form action="" method="post">
';
    $Yf = array_keys(fields($a));
    if ($L['db'] != '') {
        $e->select_db($L['db']);
    }if ($L['ns'] != '') {
        set_schema($L['ns']);
    }$rf = array_keys(array_filter(table_status('', true), 'fk_support'));
    $yg = array_keys(fields(in_array($L['table'], $rf) ? $L['table'] : reset($rf)));
    $pe = "this.form['change-js'].value = '1'; this.form.submit();";
    echo '<p>'.'Target table'.': '.html_select('table', $rf, $L['table'], $pe)."\n";
    if ($y == 'pgsql') {
        echo 'Schema'.': '.html_select('ns', $b->schemas(), $L['ns'] != '' ? $L['ns'] : $_GET['ns'], $pe);
    } elseif ($y != 'sqlite') {
        $xb = [];
        foreach ($b->databases() as $i) {
            if (! information_schema($i)) {
                $xb[] = $i;
            }
        }echo 'DB'.': '.html_select('db', $xb, $L['db'] != '' ? $L['db'] : $_GET['db'], $pe);
    }echo '<input type="hidden" name="change-js" value="">
<noscript><p><input type="submit" name="change" value="Change"></noscript>
<table cellspacing="0">
<thead><tr><th id="label-source">Source<th id="label-target">Target</thead>
';
    $x = 0;
    foreach ($L['source'] as $z => $X) {
        echo '<tr>','<td>'.html_select('source['.(+$z).']', [-1 => ''] + $Yf, $X, ($x == count($L['source']) - 1 ? 'foreignAddRow.call(this);' : 1), 'label-source'),'<td>'.html_select('target['.(+$z).']', $yg, $L['target'][$z], 1, 'label-target');
        $x++;
    }echo '</table>
<p>
ON DELETE: ',html_select('on_delete', [-1 => ''] + explode('|', $oe), $L['on_delete']),' ON UPDATE: ',html_select('on_update', [-1 => ''] + explode('|', $oe), $L['on_update']),doc_link(['sql' => 'innodb-foreign-key-constraints.html', 'mariadb' => 'foreign-keys/']),'<p>
<input type="submit" value="Save">
<noscript><p><input type="submit" name="add" value="Add column"></noscript>
';
    if ($E != '') {
        echo '<input type="submit" name="drop" value="Drop">',confirm(sprintf('Drop %s?', $E));
    }echo '<input type="hidden" name="token" value="',$T,'">
</form>
';
} elseif (isset($_GET['view'])) {
    $a = $_GET['view'];
    $L = $_POST;
    $Ce = 'VIEW';
    if ($y == 'pgsql' && $a != '') {
        $fg = table_status($a);
        $Ce = strtoupper($fg['Engine']);
    }if ($_POST && ! $k) {
        $E = trim($L['name']);
        $ua = " AS\n$L[select]";
        $B = ME.'table='.urlencode($E);
        $D = 'View has been altered.';
        $U = ($_POST['materialized'] ? 'MATERIALIZED VIEW' : 'VIEW');
        if (! $_POST['drop'] && $a == $E && $y != 'sqlite' && $U == 'VIEW' && $Ce == 'VIEW') {
            query_redirect(($y == 'mssql' ? 'ALTER' : 'CREATE OR REPLACE').' VIEW '.table($E).$ua, $B, $D);
        } else {
            $_g = $E.'_adminer_'.uniqid();
            drop_create("DROP $Ce ".table($a), "CREATE $U ".table($E).$ua, "DROP $U ".table($E), "CREATE $U ".table($_g).$ua, "DROP $U ".table($_g), ($_POST['drop'] ? substr(ME, 0, -1) : $B), 'View has been dropped.', $D, 'View has been created.', $a, $E);
        }
    }if (! $_POST && $a != '') {
        $L = view($a);
        $L['name'] = $a;
        $L['materialized'] = ($Ce != 'VIEW');
        if (! $k) {
            $k = error();
        }
    }page_header(($a != '' ? 'Alter view' : 'Create view'), $k, ['table' => $a], h($a));
    echo '
<form action="" method="post">
<p>Name: <input name="name" value="',h($L['name']),'" data-maxlength="64" autocapitalize="off">
',(support('materializedview') ? ' '.checkbox('materialized', 1, $L['materialized'], 'Materialized view') : ''),'<p>';
    textarea('select', $L['select']);
    echo '<p>
<input type="submit" value="Save">
';
    if ($a != '') {
        echo '<input type="submit" name="drop" value="Drop">',confirm(sprintf('Drop %s?', $a));
    }echo '<input type="hidden" name="token" value="',$T,'">
</form>
';
} elseif (isset($_GET['event'])) {
    $aa = $_GET['event'];
    $fd = ['YEAR', 'QUARTER', 'MONTH', 'DAY', 'HOUR', 'MINUTE', 'WEEK', 'SECOND', 'YEAR_MONTH', 'DAY_HOUR', 'DAY_MINUTE', 'DAY_SECOND', 'HOUR_MINUTE', 'HOUR_SECOND', 'MINUTE_SECOND'];
    $gg = ['ENABLED' => 'ENABLE', 'DISABLED' => 'DISABLE', 'SLAVESIDE_DISABLED' => 'DISABLE ON SLAVE'];
    $L = $_POST;
    if ($_POST && ! $k) {
        if ($_POST['drop']) {
            query_redirect('DROP EVENT '.idf_escape($aa), substr(ME, 0, -1), 'Event has been dropped.');
        } elseif (in_array($L['INTERVAL_FIELD'], $fd) && isset($gg[$L['STATUS']])) {
            $Gf = "\nON SCHEDULE ".($L['INTERVAL_VALUE'] ? 'EVERY '.q($L['INTERVAL_VALUE'])." $L[INTERVAL_FIELD]".($L['STARTS'] ? ' STARTS '.q($L['STARTS']) : '').($L['ENDS'] ? ' ENDS '.q($L['ENDS']) : '') : 'AT '.q($L['STARTS'])).' ON COMPLETION'.($L['ON_COMPLETION'] ? '' : ' NOT').' PRESERVE';
            queries_redirect(substr(ME, 0, -1), ($aa != '' ? 'Event has been altered.' : 'Event has been created.'), queries(($aa != '' ? 'ALTER EVENT '.idf_escape($aa).$Gf.($aa != $L['EVENT_NAME'] ? "\nRENAME TO ".idf_escape($L['EVENT_NAME']) : '') : 'CREATE EVENT '.idf_escape($L['EVENT_NAME']).$Gf)."\n".$gg[$L['STATUS']].' COMMENT '.q($L['EVENT_COMMENT']).rtrim(" DO\n$L[EVENT_DEFINITION]", ';').';'));
        }
    }page_header(($aa != '' ? 'Alter event'.': '.h($aa) : 'Create event'), $k);
    if (! $L && $aa != '') {
        $M = get_rows('SELECT * FROM information_schema.EVENTS WHERE EVENT_SCHEMA = '.q(DB).' AND EVENT_NAME = '.q($aa));
        $L = reset($M);
    }echo '
<form action="" method="post">
<table cellspacing="0" class="layout">
<tr><th>Name<td><input name="EVENT_NAME" value="',h($L['EVENT_NAME']),'" data-maxlength="64" autocapitalize="off">
<tr><th title="datetime">Start<td><input name="STARTS" value="',h("$L[EXECUTE_AT]$L[STARTS]"),'">
<tr><th title="datetime">End<td><input name="ENDS" value="',h($L['ENDS']),'">
<tr><th>Every<td><input type="number" name="INTERVAL_VALUE" value="',h($L['INTERVAL_VALUE']),'" class="size"> ',html_select('INTERVAL_FIELD', $fd, $L['INTERVAL_FIELD']),'<tr><th>Status<td>',html_select('STATUS', $gg, $L['STATUS']),'<tr><th>Comment<td><input name="EVENT_COMMENT" value="',h($L['EVENT_COMMENT']),'" data-maxlength="64">
<tr><th><td>',checkbox('ON_COMPLETION', 'PRESERVE', $L['ON_COMPLETION'] == 'PRESERVE', 'On completion preserve'),'</table>
<p>';
    textarea('EVENT_DEFINITION', $L['EVENT_DEFINITION']);
    echo '<p>
<input type="submit" value="Save">
';
    if ($aa != '') {
        echo '<input type="submit" name="drop" value="Drop">',confirm(sprintf('Drop %s?', $aa));
    }echo '<input type="hidden" name="token" value="',$T,'">
</form>
';
} elseif (isset($_GET['procedure'])) {
    $da = ($_GET['name'] ? $_GET['name'] : $_GET['procedure']);
    $Cf = (isset($_GET['function']) ? 'FUNCTION' : 'PROCEDURE');
    $L = $_POST;
    $L['fields'] = (array) $L['fields'];
    if ($_POST && ! process_fields($L['fields']) && ! $k) {
        $_e = routine($_GET['procedure'], $Cf);
        $_g = "$L[name]_adminer_".uniqid();
        drop_create("DROP $Cf ".routine_id($da, $_e), create_routine($Cf, $L), "DROP $Cf ".routine_id($L['name'], $L), create_routine($Cf, ['name' => $_g] + $L), "DROP $Cf ".routine_id($_g, $L), substr(ME, 0, -1), 'Routine has been dropped.', 'Routine has been altered.', 'Routine has been created.', $da, $L['name']);
    }page_header(($da != '' ? (isset($_GET['function']) ? 'Alter function' : 'Alter procedure').': '.h($da) : (isset($_GET['function']) ? 'Create function' : 'Create procedure')), $k);
    if (! $_POST && $da != '') {
        $L = routine($_GET['procedure'], $Cf);
        $L['name'] = $da;
    }$Xa = get_vals('SHOW CHARACTER SET');
    sort($Xa);
    $Df = routine_languages();
    echo '
<form action="" method="post" id="form">
<p>Name: <input name="name" value="',h($L['name']),'" data-maxlength="64" autocapitalize="off">
',($Df ? 'Language'.': '.html_select('language', $Df, $L['language'])."\n" : ''),'<input type="submit" value="Save">
<div class="scrollable">
<table cellspacing="0" class="nowrap">
';
    edit_fields($L['fields'], $Xa, $Cf);
    if (isset($_GET['function'])) {
        echo '<tr><td>'.'Return type';
        edit_type('returns', $L['returns'], $Xa, [], ($y == 'pgsql' ? ['void', 'trigger'] : []));
    }echo '</table>
',script('editFields();'),'</div>
<p>';
    textarea('definition', $L['definition']);
    echo '<p>
<input type="submit" value="Save">
';
    if ($da != '') {
        echo '<input type="submit" name="drop" value="Drop">',confirm(sprintf('Drop %s?', $da));
    }echo '<input type="hidden" name="token" value="',$T,'">
</form>
';
} elseif (isset($_GET['trigger'])) {
    $a = $_GET['trigger'];
    $E = $_GET['name'];
    $Tg = trigger_options();
    $L = (array) trigger($E, $a) + ['Trigger' => $a.'_bi'];
    if ($_POST) {
        if (! $k && in_array($_POST['Timing'], $Tg['Timing']) && in_array($_POST['Event'], $Tg['Event']) && in_array($_POST['Type'], $Tg['Type'])) {
            $ne = ' ON '.table($a);
            $Lb = 'DROP TRIGGER '.idf_escape($E).($y == 'pgsql' ? $ne : '');
            $B = ME.'table='.urlencode($a);
            if ($_POST['drop']) {
                query_redirect($Lb, $B, 'Trigger has been dropped.');
            } else {
                if ($E != '') {
                    queries($Lb);
                }queries_redirect($B, ($E != '' ? 'Trigger has been altered.' : 'Trigger has been created.'), queries(create_trigger($ne, $_POST)));
                if ($E != '') {
                    queries(create_trigger($ne, $L + ['Type' => reset($Tg['Type'])]));
                }
            }
        }$L = $_POST;
    }page_header(($E != '' ? 'Alter trigger'.': '.h($E) : 'Create trigger'), $k, ['table' => $a]);
    echo '
<form action="" method="post" id="form">
<table cellspacing="0" class="layout">
<tr><th>Time<td>',html_select('Timing', $Tg['Timing'], $L['Timing'], 'triggerChange(/^'.preg_quote($a, '/')."_[ba][iud]$/, '".js_escape($a)."', this.form);"),'<tr><th>Event<td>',html_select('Event', $Tg['Event'], $L['Event'], "this.form['Timing'].onchange();"),(in_array('UPDATE OF', $Tg['Event']) ? " <input name='Of' value='".h($L['Of'])."' class='hidden'>" : ''),'<tr><th>Type<td>',html_select('Type', $Tg['Type'], $L['Type']),'</table>
<p>Name: <input name="Trigger" value="',h($L['Trigger']),'" data-maxlength="64" autocapitalize="off">
',script("qs('#form')['Timing'].onchange();"),'<p>';
    textarea('Statement', $L['Statement']);
    echo '<p>
<input type="submit" value="Save">
';
    if ($E != '') {
        echo '<input type="submit" name="drop" value="Drop">',confirm(sprintf('Drop %s?', $E));
    }echo '<input type="hidden" name="token" value="',$T,'">
</form>
';
} elseif (isset($_GET['user'])) {
    $fa = $_GET['user'];
    $gf = ['' => ['All privileges' => '']];
    foreach (get_rows('SHOW PRIVILEGES') as $L) {
        foreach (explode(',', ($L['Privilege'] == 'Grant option' ? '' : $L['Context'])) as $ib) {
            $gf[$ib][$L['Privilege']] = $L['Comment'];
        }
    }$gf['Server Admin'] += $gf['File access on server'];
    $gf['Databases']['Create routine'] = $gf['Procedures']['Create routine'];
    unset($gf['Procedures']['Create routine']);
    $gf['Columns'] = [];
    foreach (['Select', 'Insert', 'Update', 'References'] as $X) {
        $gf['Columns'][$X] = $gf['Tables'][$X];
    }unset($gf['Server Admin']['Usage']);
    foreach ($gf['Tables'] as $z => $X) {
        unset($gf['Databases'][$z]);
    }$Yd = [];
    if ($_POST) {
        foreach ($_POST['objects'] as $z => $X) {
            $Yd[$X] = (array) $Yd[$X] + (array) $_POST['grants'][$z];
        }
    }$Gc = [];
    $le = '';
    if (isset($_GET['host']) && ($J = $e->query('SHOW GRANTS FOR '.q($fa).'@'.q($_GET['host'])))) {
        while ($L = $J->fetch_row()) {
            if (preg_match('~GRANT (.*) ON (.*) TO ~', $L[0], $C) && preg_match_all('~ *([^(,]*[^ ,(])( *\([^)]+\))?~', $C[1], $Gd, PREG_SET_ORDER)) {
                foreach ($Gd as $X) {
                    if ($X[1] != 'USAGE') {
                        $Gc["$C[2]$X[2]"][$X[1]] = true;
                    }if (preg_match('~ WITH GRANT OPTION~', $L[0])) {
                        $Gc["$C[2]$X[2]"]['GRANT OPTION'] = true;
                    }
                }
            }if (preg_match("~ IDENTIFIED BY PASSWORD '([^']+)~", $L[0], $C)) {
                $le = $C[1];
            }
        }
    }if ($_POST && ! $k) {
        $me = (isset($_GET['host']) ? q($fa).'@'.q($_GET['host']) : "''");
        if ($_POST['drop']) {
            query_redirect("DROP USER $me", ME.'privileges=', 'User has been dropped.');
        } else {
            $ae = q($_POST['user']).'@'.q($_POST['host']);
            $Pe = $_POST['pass'];
            if ($Pe != '' && ! $_POST['hashed'] && ! min_version(8)) {
                $Pe = $e->result('SELECT PASSWORD('.q($Pe).')');
                $k = ! $Pe;
            }$mb = false;
            if (! $k) {
                if ($me != $ae) {
                    $mb = queries((min_version(5) ? 'CREATE USER' : 'GRANT USAGE ON *.* TO')." $ae IDENTIFIED BY ".(min_version(8) ? '' : 'PASSWORD ').q($Pe));
                    $k = ! $mb;
                } elseif ($Pe != $le) {
                    queries("SET PASSWORD FOR $ae = ".q($Pe));
                }
            }if (! $k) {
                $_f = [];
                foreach ($Yd as $ge => $r) {
                    if (isset($_GET['grant'])) {
                        $r = array_filter($r);
                    }$r = array_keys($r);
                    if (isset($_GET['grant'])) {
                        $_f = array_diff(array_keys(array_filter($Yd[$ge], 'strlen')), $r);
                    } elseif ($me == $ae) {
                        $je = array_keys((array) $Gc[$ge]);
                        $_f = array_diff($je, $r);
                        $r = array_diff($r, $je);
                        unset($Gc[$ge]);
                    }if (preg_match('~^(.+)\s*(\(.*\))?$~U', $ge, $C) && (! grant('REVOKE', $_f, $C[2], " ON $C[1] FROM $ae") || ! grant('GRANT', $r, $C[2], " ON $C[1] TO $ae"))) {
                        $k = true;
                        break;
                    }
                }
            }if (! $k && isset($_GET['host'])) {
                if ($me != $ae) {
                    queries("DROP USER $me");
                } elseif (! isset($_GET['grant'])) {
                    foreach ($Gc as $ge => $_f) {
                        if (preg_match('~^(.+)(\(.*\))?$~U', $ge, $C)) {
                            grant('REVOKE', array_keys($_f), $C[2], " ON $C[1] FROM $ae");
                        }
                    }
                }
            }queries_redirect(ME.'privileges=', (isset($_GET['host']) ? 'User has been altered.' : 'User has been created.'), ! $k);
            if ($mb) {
                $e->query("DROP USER $ae");
            }
        }
    }page_header((isset($_GET['host']) ? 'Username'.': '.h("$fa@$_GET[host]") : 'Create user'), $k, ['privileges' => ['', 'Privileges']]);
    if ($_POST) {
        $L = $_POST;
        $Gc = $Yd;
    } else {
        $L = $_GET + ['host' => $e->result("SELECT SUBSTRING_INDEX(CURRENT_USER, '@', -1)")];
        $L['pass'] = $le;
        if ($le != '') {
            $L['hashed'] = true;
        }$Gc[(DB == '' || $Gc ? '' : idf_escape(addcslashes(DB, '%_\\'))).'.*'] = [];
    }echo '<form action="" method="post">
<table cellspacing="0" class="layout">
<tr><th>Server<td><input name="host" data-maxlength="60" value="',h($L['host']),'" autocapitalize="off">
<tr><th>Username<td><input name="user" data-maxlength="80" value="',h($L['user']),'" autocapitalize="off">
<tr><th>Password<td><input name="pass" id="pass" value="',h($L['pass']),'" autocomplete="new-password">
';
    if (! $L['hashed']) {
        echo script("typePassword(qs('#pass'));");
    }echo (min_version(8) ? '' : checkbox('hashed', 1, $L['hashed'], 'Hashed', "typePassword(this.form['pass'], this.checked);")),'</table>

';
    echo "<table cellspacing='0'>\n","<thead><tr><th colspan='2'>".'Privileges'.doc_link(['sql' => 'grant.html#priv_level']);
    $t = 0;
    foreach ($Gc as $ge => $r) {
        echo '<th>'.($ge != '*.*' ? "<input name='objects[$t]' value='".h($ge)."' size='10' autocapitalize='off'>" : "<input type='hidden' name='objects[$t]' value='*.*' size='10'>*.*");
        $t++;
    }echo "</thead>\n";
    foreach (['' => '', 'Server Admin' => 'Server', 'Databases' => 'Database', 'Tables' => 'Table', 'Columns' => 'Column', 'Procedures' => 'Routine'] as $ib => $Db) {
        foreach ((array) $gf[$ib] as $ff => $bb) {
            echo '<tr'.odd().'><td'.($Db ? ">$Db<td" : " colspan='2'").' lang="en" title="'.h($bb).'">'.h($ff);
            $t = 0;
            foreach ($Gc as $ge => $r) {
                $E = "'grants[$t][".h(strtoupper($ff))."]'";
                $Y = $r[strtoupper($ff)];
                if ($ib == 'Server Admin' && $ge != (isset($Gc['*.*']) ? '*.*' : '.*')) {
                    echo '<td>';
                } elseif (isset($_GET['grant'])) {
                    echo "<td><select name=$E><option><option value='1'".($Y ? ' selected' : '').'>'.'Grant'."<option value='0'".($Y == '0' ? ' selected' : '').'>'.'Revoke'.'</select>';
                } else {
                    echo "<td align='center'><label class='block'>","<input type='checkbox' name=$E value='1'".($Y ? ' checked' : '').($ff == 'All privileges' ? " id='grants-$t-all'>" : '>'.($ff == 'Grant option' ? '' : script("qsl('input').onclick = function () { if (this.checked) formUncheck('grants-$t-all'); };"))),'</label>';
                }$t++;
            }
        }
    }echo "</table>\n",'<p>
<input type="submit" value="Save">
';
    if (isset($_GET['host'])) {
        echo '<input type="submit" name="drop" value="Drop">',confirm(sprintf('Drop %s?', "$fa@$_GET[host]"));
    }echo '<input type="hidden" name="token" value="',$T,'">
</form>
';
} elseif (isset($_GET['processlist'])) {
    if (support('kill')) {
        if ($_POST && ! $k) {
            $pd = 0;
            foreach ((array) $_POST['kill'] as $X) {
                if (kill_process($X)) {
                    $pd++;
                }
            }queries_redirect(ME.'processlist=', lang(['%d process has been killed.', '%d processes have been killed.'], $pd), $pd || ! $_POST['kill']);
        }
    }page_header('Process list', $k);
    echo '
<form action="" method="post">
<div class="scrollable">
<table cellspacing="0" class="nowrap checkable">
',script("mixin(qsl('table'), {onclick: tableClick, ondblclick: partialArg(tableClick, true)});");
    $t = -1;
    foreach (process_list() as $t => $L) {
        if (! $t) {
            echo "<thead><tr lang='en'>".(support('kill') ? '<th>' : '');
            foreach ($L as $z => $X) {
                echo "<th>$z".doc_link(['sql' => 'show-processlist.html#processlist_'.strtolower($z)]);
            }echo "</thead>\n";
        }echo '<tr'.odd().'>'.(support('kill') ? '<td>'.checkbox('kill[]', $L[$y == 'sql' ? 'Id' : 'pid'], 0) : '');
        foreach ($L as $z => $X) {
            echo '<td>'.(($y == 'sql' && $z == 'Info' && preg_match('~Query|Killed~', $L['Command']) && $X != '') || ($y == 'pgsql' && $z == 'current_query' && $X != '<IDLE>') || ($y == 'oracle' && $z == 'sql_text' && $X != '') ? "<code class='jush-$y'>".shorten_utf8($X, 100, '</code>').' <a href="'.h(ME.($L['db'] != '' ? 'db='.urlencode($L['db']).'&' : '').'sql='.urlencode($X)).'">'.'Clone'.'</a>' : h($X));
        }echo "\n";
    }echo '</table>
</div>
<p>
';
    if (support('kill')) {
        echo ($t + 1).'/'.sprintf('%d in total', max_connections()),"<p><input type='submit' value='".'Kill'."'>\n";
    }echo '<input type="hidden" name="token" value="',$T,'">
</form>
',script('tableCheck();');
} elseif (isset($_GET['select'])) {
    $a = $_GET['select'];
    $R = table_status1($a);
    $w = indexes($a);
    $m = fields($a);
    $o = column_foreign_keys($a);
    $ie = $R['Oid'];
    parse_str($_COOKIE['adminer_import'], $ma);
    $Af = [];
    $d = [];
    $Cg = null;
    foreach ($m as $z => $l) {
        $E = $b->fieldName($l);
        if (isset($l['privileges']['select']) && $E != '') {
            $d[$z] = html_entity_decode(strip_tags($E), ENT_QUOTES);
            if (is_shortable($l)) {
                $Cg = $b->selectLengthProcess();
            }
        }$Af += $l['privileges'];
    }[$N, $s] = $b->selectColumnsProcess($d, $w);
    $jd = count($s) < count($N);
    $Z = $b->selectSearchProcess($m, $w);
    $we = $b->selectOrderProcess($m, $w);
    $_ = $b->selectLimitProcess();
    if ($_GET['val'] && is_ajax()) {
        header('Content-Type: text/plain; charset=utf-8');
        foreach ($_GET['val'] as $bh => $L) {
            $ua = convert_field($m[key($L)]);
            $N = [$ua ? $ua : idf_escape(key($L))];
            $Z[] = where_check($bh, $m);
            $K = $j->select($a, $N, $Z, $N);
            if ($K) {
                echo reset($K->fetch_row());
            }
        }exit;
    }$cf = $dh = null;
    foreach ($w as $v) {
        if ($v['type'] == 'PRIMARY') {
            $cf = array_flip($v['columns']);
            $dh = ($N ? $cf : []);
            foreach ($dh as $z => $X) {
                if (in_array(idf_escape($z), $N)) {
                    unset($dh[$z]);
                }
            }break;
        }
    }if ($ie && ! $cf) {
        $cf = $dh = [$ie => 0];
        $w[] = ['type' => 'PRIMARY', 'columns' => [$ie]];
    }if ($_POST && ! $k) {
        $zh = $Z;
        if (! $_POST['all'] && is_array($_POST['check'])) {
            $Oa = [];
            foreach ($_POST['check'] as $Ma) {
                $Oa[] = where_check($Ma, $m);
            }$zh[] = '(('.implode(') OR (', $Oa).'))';
        }$zh = ($zh ? "\nWHERE ".implode(' AND ', $zh) : '');
        if ($_POST['export']) {
            cookie('adminer_import', 'output='.urlencode($_POST['output']).'&format='.urlencode($_POST['format']));
            dump_headers($a);
            $b->dumpTable($a, '');
            $Ec = ($N ? implode(', ', $N) : '*').convert_fields($d, $m, $N)."\nFROM ".table($a);
            $Ic = ($s && $jd ? "\nGROUP BY ".implode(', ', $s) : '').($we ? "\nORDER BY ".implode(', ', $we) : '');
            if (! is_array($_POST['check']) || $cf) {
                $I = "SELECT $Ec$zh$Ic";
            } else {
                $Zg = [];
                foreach ($_POST['check'] as $X) {
                    $Zg[] = '(SELECT'.limit($Ec, "\nWHERE ".($Z ? implode(' AND ', $Z).' AND ' : '').where_check($X, $m).$Ic, 1).')';
                }$I = implode(' UNION ALL ', $Zg);
            }$b->dumpData($a, 'table', $I);
            exit;
        }if (! $b->selectEmailProcess($Z, $o)) {
            if ($_POST['save'] || $_POST['delete']) {
                $J = true;
                $na = 0;
                $P = [];
                if (! $_POST['delete']) {
                    foreach ($d as $E => $X) {
                        $X = process_input($m[$E]);
                        if ($X !== null && ($_POST['clone'] || $X !== false)) {
                            $P[idf_escape($E)] = ($X !== false ? $X : idf_escape($E));
                        }
                    }
                }if ($_POST['delete'] || $P) {
                    if ($_POST['clone']) {
                        $I = 'INTO '.table($a).' ('.implode(', ', array_keys($P)).")\nSELECT ".implode(', ', $P)."\nFROM ".table($a);
                    }if ($_POST['all'] || ($cf && is_array($_POST['check'])) || $jd) {
                        $J = ($_POST['delete'] ? $j->delete($a, $zh) : ($_POST['clone'] ? queries("INSERT $I$zh") : $j->update($a, $P, $zh)));
                        $na = $e->affected_rows;
                    } else {
                        foreach ((array) $_POST['check'] as $X) {
                            $yh = "\nWHERE ".($Z ? implode(' AND ', $Z).' AND ' : '').where_check($X, $m);
                            $J = ($_POST['delete'] ? $j->delete($a, $yh, 1) : ($_POST['clone'] ? queries('INSERT'.limit1($a, $I, $yh)) : $j->update($a, $P, $yh, 1)));
                            if (! $J) {
                                break;
                            }$na += $e->affected_rows;
                        }
                    }
                }$D = lang(['%d item has been affected.', '%d items have been affected.'], $na);
                if ($_POST['clone'] && $J && $na == 1) {
                    $ud = last_id();
                    if ($ud) {
                        $D = sprintf('Item%s has been inserted.', " $ud");
                    }
                }queries_redirect(remove_from_uri($_POST['all'] && $_POST['delete'] ? 'page' : ''), $D, $J);
                if (! $_POST['delete']) {
                    edit_form($a, $m, (array) $_POST['fields'], ! $_POST['clone']);
                    page_footer();
                    exit;
                }
            } elseif (! $_POST['import']) {
                if (! $_POST['val']) {
                    $k = 'Ctrl+click on a value to modify it.';
                } else {
                    $J = true;
                    $na = 0;
                    foreach ($_POST['val'] as $bh => $L) {
                        $P = [];
                        foreach ($L as $z => $X) {
                            $z = bracket_escape($z, 1);
                            $P[idf_escape($z)] = (preg_match('~char|text~', $m[$z]['type']) || $X != '' ? $b->processInput($m[$z], $X) : 'NULL');
                        }$J = $j->update($a, $P, ' WHERE '.($Z ? implode(' AND ', $Z).' AND ' : '').where_check($bh, $m), ! $jd && ! $cf, ' ');
                        if (! $J) {
                            break;
                        }$na += $e->affected_rows;
                    }queries_redirect(remove_from_uri(), lang(['%d item has been affected.', '%d items have been affected.'], $na), $J);
                }
            } elseif (! is_string($uc = get_file('csv_file', true))) {
                $k = upload_error($uc);
            } elseif (! preg_match('~~u', $uc)) {
                $k = 'File must be in UTF-8 encoding.';
            } else {
                cookie('adminer_import', 'output='.urlencode($ma['output']).'&format='.urlencode($_POST['separator']));
                $J = true;
                $Ya = array_keys($m);
                preg_match_all('~(?>"[^"]*"|[^"\r\n]+)+~', $uc, $Gd);
                $na = count($Gd[0]);
                $j->begin();
                $Of = ($_POST['separator'] == 'csv' ? ',' : ($_POST['separator'] == 'tsv' ? "\t" : ';'));
                $M = [];
                foreach ($Gd[0] as $z => $X) {
                    preg_match_all("~((?>\"[^\"]*\")+|[^$Of]*)$Of~", $X.$Of, $Hd);
                    if (! $z && ! array_diff($Hd[1], $Ya)) {
                        $Ya = $Hd[1];
                        $na--;
                    } else {
                        $P = [];
                        foreach ($Hd[1] as $t => $Ua) {
                            $P[idf_escape($Ya[$t])] = ($Ua == '' && $m[$Ya[$t]]['null'] ? 'NULL' : q(str_replace('""', '"', preg_replace('~^"|"$~', '', $Ua))));
                        }$M[] = $P;
                    }
                }$J = (! $M || $j->insertUpdate($a, $M, $cf));
                if ($J) {
                    $J = $j->commit();
                }queries_redirect(remove_from_uri('page'), lang(['%d row has been imported.', '%d rows have been imported.'], $na), $J);
                $j->rollback();
            }
        }
    }$rg = $b->tableName($R);
    if (is_ajax()) {
        page_headers();
        ob_start();
    } else {
        page_header('Select'.": $rg", $k);
    }$P = null;
    if (isset($Af['insert']) || ! support('table')) {
        $P = '';
        foreach ((array) $_GET['where'] as $X) {
            if ($o[$X['col']] && count($o[$X['col']]) == 1 && ($X['op'] == '=' || (! $X['op'] && ! preg_match('~[_%]~', $X['val'])))) {
                $P .= '&set'.urlencode('['.bracket_escape($X['col']).']').'='.urlencode($X['val']);
            }
        }
    }$b->selectLinks($R, $P);
    if (! $d && support('table')) {
        echo "<p class='error'>".'Unable to select the table'.($m ? '.' : ': '.error())."\n";
    } else {
        echo "<form action='' id='form'>\n","<div style='display: none;'>";
        hidden_fields_get();
        echo DB != '' ? '<input type="hidden" name="db" value="'.h(DB).'">'.(isset($_GET['ns']) ? '<input type="hidden" name="ns" value="'.h($_GET['ns']).'">' : '') : '';
        echo '<input type="hidden" name="select" value="'.h($a).'">',"</div>\n";
        $b->selectColumnsPrint($N, $d);
        $b->selectSearchPrint($Z, $d, $w);
        $b->selectOrderPrint($we, $d, $w);
        $b->selectLimitPrint($_);
        $b->selectLengthPrint($Cg);
        $b->selectActionPrint($w);
        echo "</form>\n";
        $F = $_GET['page'];
        if ($F == 'last') {
            $Dc = $e->result(count_rows($a, $Z, $jd, $s));
            $F = floor(max(0, $Dc - 1) / $_);
        }$Jf = $N;
        $Hc = $s;
        if (! $Jf) {
            $Jf[] = '*';
            $jb = convert_fields($d, $m, $N);
            if ($jb) {
                $Jf[] = substr($jb, 2);
            }
        }foreach ($N as $z => $X) {
            $l = $m[idf_unescape($X)];
            if ($l && ($ua = convert_field($l))) {
                $Jf[$z] = "$ua AS $X";
            }
        }if (! $jd && $dh) {
            foreach ($dh as $z => $X) {
                $Jf[] = idf_escape($z);
                if ($Hc) {
                    $Hc[] = idf_escape($z);
                }
            }
        }$J = $j->select($a, $Jf, $Z, $Hc, $we, $_, $F, true);
        if (! $J) {
            echo "<p class='error'>".error()."\n";
        } else {
            if ($y == 'mssql' && $F) {
                $J->seek($_ * $F);
            }$Xb = [];
            echo "<form action='' method='post' enctype='multipart/form-data'>\n";
            $M = [];
            while ($L = $J->fetch_assoc()) {
                if ($F && $y == 'oracle') {
                    unset($L['RNUM']);
                }$M[] = $L;
            }if ($_GET['page'] != 'last' && $_ != '' && $s && $jd && $y == 'sql') {
                $Dc = $e->result(' SELECT FOUND_ROWS()');
            }if (! $M) {
                echo "<p class='message'>".'No rows.'."\n";
            } else {
                $Ba = $b->backwardKeys($a, $rg);
                echo "<div class='scrollable'>","<table id='table' cellspacing='0' class='nowrap checkable'>",script("mixin(qs('#table'), {onclick: tableClick, ondblclick: partialArg(tableClick, true), onkeydown: editingKeydown});"),'<thead><tr>'.(! $s && $N ? '' : "<td><input type='checkbox' id='all-page' class='jsonly'>".script("qs('#all-page').onclick = partial(formCheck, /check/);", '')." <a href='".h($_GET['modify'] ? remove_from_uri('modify') : $_SERVER['REQUEST_URI'].'&modify=1')."'>".'Modify'.'</a>');
                $Xd = [];
                $Fc = [];
                reset($N);
                $of = 1;
                foreach ($M[0] as $z => $X) {
                    if (! isset($dh[$z])) {
                        $X = $_GET['columns'][key($N)];
                        $l = $m[$N ? ($X ? $X['col'] : current($N)) : $z];
                        $E = ($l ? $b->fieldName($l, $of) : ($X['fun'] ? '*' : $z));
                        if ($E != '') {
                            $of++;
                            $Xd[$z] = $E;
                            $c = idf_escape($z);
                            $Uc = remove_from_uri('(order|desc)[^=]*|page').'&order%5B0%5D='.urlencode($z);
                            $Db = '&desc%5B0%5D=1';
                            echo "<th id='th[".h(bracket_escape($z))."]'>".script("mixin(qsl('th'), {onmouseover: partial(columnMouse), onmouseout: partial(columnMouse, ' hidden')});", ''),'<a href="'.h($Uc.($we[0] == $c || $we[0] == $z || (! $we && $jd && $s[0] == $c) ? $Db : '')).'">';
                            echo apply_sql_function($X['fun'], $E).'</a>';
                            echo "<span class='column hidden'>","<a href='".h($Uc.$Db)."' title='".'descending'."' class='text'> ↓</a>";
                            if (! $X['fun']) {
                                echo '<a href="#fieldset-search" title="'.'Search'.'" class="text jsonly"> =</a>',script("qsl('a').onclick = partial(selectSearch, '".js_escape($z)."');");
                            }echo '</span>';
                        }$Fc[$z] = $X['fun'];
                        next($N);
                    }
                }$_d = [];
                if ($_GET['modify']) {
                    foreach ($M as $L) {
                        foreach ($L as $z => $X) {
                            $_d[$z] = max($_d[$z], min(40, strlen(utf8_decode($X))));
                        }
                    }
                }echo ($Ba ? '<th>'.'Relations' : '')."</thead>\n";
                if (is_ajax()) {
                    if ($_ % 2 == 1 && $F % 2 == 1) {
                        odd();
                    }ob_end_clean();
                }foreach ($b->rowDescriptions($M, $o) as $Wd => $L) {
                    $ah = unique_array($M[$Wd], $w);
                    if (! $ah) {
                        $ah = [];
                        foreach ($M[$Wd] as $z => $X) {
                            if (! preg_match('~^(COUNT\((\*|(DISTINCT )?`(?:[^`]|``)+`)\)|(AVG|GROUP_CONCAT|MAX|MIN|SUM)\(`(?:[^`]|``)+`\))$~', $z)) {
                                $ah[$z] = $X;
                            }
                        }
                    }$bh = '';
                    foreach ($ah as $z => $X) {
                        if (($y == 'sql' || $y == 'pgsql') && preg_match('~char|text|enum|set~', $m[$z]['type']) && strlen($X) > 64) {
                            $z = (strpos($z, '(') ? $z : idf_escape($z));
                            $z = 'MD5('.($y != 'sql' || preg_match('~^utf8~', $m[$z]['collation']) ? $z : "CONVERT($z USING ".charset($e).')').')';
                            $X = md5($X);
                        }$bh .= '&'.($X !== null ? urlencode('where['.bracket_escape($z).']').'='.urlencode($X) : 'null%5B%5D='.urlencode($z));
                    }echo '<tr'.odd().'>'.(! $s && $N ? '' : '<td>'.checkbox('check[]', substr($bh, 1), in_array(substr($bh, 1), (array) $_POST['check'])).($jd || information_schema(DB) ? '' : " <a href='".h(ME.'edit='.urlencode($a).$bh)."' class='edit'>".'edit'.'</a>'));
                    foreach ($L as $z => $X) {
                        if (isset($Xd[$z])) {
                            $l = $m[$z];
                            $X = $j->value($X, $l);
                            if ($X != '' && (! isset($Xb[$z]) || $Xb[$z] != '')) {
                                $Xb[$z] = (is_mail($X) ? $Xd[$z] : '');
                            }$A = '';
                            if (preg_match('~blob|bytea|raw|file~', $l['type']) && $X != '') {
                                $A = ME.'download='.urlencode($a).'&field='.urlencode($z).$bh;
                            }if (! $A && $X !== null) {
                                foreach ((array) $o[$z] as $n) {
                                    if (count($o[$z]) == 1 || end($n['source']) == $z) {
                                        $A = '';
                                        foreach ($n['source'] as $t => $Yf) {
                                            $A .= where_link($t, $n['target'][$t], $M[$Wd][$Yf]);
                                        }$A = ($n['db'] != '' ? preg_replace('~([?&]db=)[^&]+~', '\1'.urlencode($n['db']), ME) : ME).'select='.urlencode($n['table']).$A;
                                        if ($n['ns']) {
                                            $A = preg_replace('~([?&]ns=)[^&]+~', '\1'.urlencode($n['ns']), $A);
                                        }if (count($n['source']) == 1) {
                                            break;
                                        }
                                    }
                                }
                            }if ($z == 'COUNT(*)') {
                                $A = ME.'select='.urlencode($a);
                                $t = 0;
                                foreach ((array) $_GET['where'] as $W) {
                                    if (! array_key_exists($W['col'], $ah)) {
                                        $A .= where_link($t++, $W['col'], $W['val'], $W['op']);
                                    }
                                }foreach ($ah as $md => $W) {
                                    $A .= where_link($t++, $md, $W);
                                }
                            }$X = select_value($X, $A, $l, $Cg);
                            $u = h("val[$bh][".bracket_escape($z).']');
                            $Y = $_POST['val'][$bh][bracket_escape($z)];
                            $Sb = ! is_array($L[$z]) && is_utf8($X) && $M[$Wd][$z] == $L[$z] && ! $Fc[$z];
                            $Bg = preg_match('~text|lob~', $l['type']);
                            echo "<td id='$u'";
                            if (($_GET['modify'] && $Sb) || $Y !== null) {
                                $Lc = h($Y !== null ? $Y : $L[$z]);
                                echo '>'.($Bg ? "<textarea name='$u' cols='30' rows='".(substr_count($L[$z], "\n") + 1)."'>$Lc</textarea>" : "<input name='$u' value='$Lc' size='$_d[$z]'>");
                            } else {
                                $Dd = strpos($X, '<i>…</i>');
                                echo " data-text='".($Dd ? 2 : ($Bg ? 1 : 0))."'".($Sb ? '' : " data-warning='".h('Use edit link to modify this value.')."'").">$X</td>";
                            }
                        }
                    }if ($Ba) {
                        echo '<td>';
                    }$b->backwardKeysPrint($Ba, $M[$Wd]);
                    echo "</tr>\n";
                }if (is_ajax()) {
                    exit;
                }echo "</table>\n","</div>\n";
            }if (! is_ajax()) {
                if ($M || $F) {
                    $ic = true;
                    if ($_GET['page'] != 'last') {
                        if ($_ == '' || (count($M) < $_ && ($M || ! $F))) {
                            $Dc = ($F ? $F * $_ : 0) + count($M);
                        } elseif ($y != 'sql' || ! $jd) {
                            $Dc = ($jd ? false : found_rows($R, $Z));
                            if ($Dc < max(1e4, 2 * ($F + 1) * $_)) {
                                $Dc = reset(slow_query(count_rows($a, $Z, $jd, $s)));
                            } else {
                                $ic = false;
                            }
                        }
                    }$He = ($_ != '' && ($Dc === false || $Dc > $_ || $F));
                    if ($He) {
                        echo (($Dc === false ? count($M) + 1 : $Dc - $F * $_) > $_ ? '<p><a href="'.h(remove_from_uri('page').'&page='.($F + 1)).'" class="loadmore">'.'Load more data'.'</a>'.script("qsl('a').onclick = partial(selectLoadMore, ".(+$_).", '".'Loading'."…');", '') : ''),"\n";
                    }
                }echo "<div class='footer'><div>\n";
                if ($M || $F) {
                    if ($He) {
                        $Jd = ($Dc === false ? $F + (count($M) >= $_ ? 2 : 1) : floor(($Dc - 1) / $_));
                        echo '<fieldset>';
                        if ($y != 'simpledb') {
                            echo "<legend><a href='".h(remove_from_uri('page'))."'>".'Page'.'</a></legend>',script("qsl('a').onclick = function () { pageClick(this.href, +prompt('".'Page'."', '".($F + 1)."')); return false; };"),pagination(0, $F).($F > 5 ? ' …' : '');
                            for ($t = max(1, $F - 4); $t < min($Jd, $F + 5); $t++) {
                                echo pagination($t, $F);
                            }if ($Jd > 0) {
                                echo ($F + 5 < $Jd ? ' …' : ''),($ic && $Dc !== false ? pagination($Jd, $F) : " <a href='".h(remove_from_uri('page').'&page=last')."' title='~$Jd'>".'last'.'</a>');
                            }
                        } else {
                            echo '<legend>'.'Page'.'</legend>',pagination(0, $F).($F > 1 ? ' …' : ''),($F ? pagination($F, $F) : ''),($Jd > $F ? pagination($F + 1, $F).($Jd > $F + 1 ? ' …' : '') : '');
                        }echo "</fieldset>\n";
                    }echo '<fieldset>','<legend>'.'Whole result'.'</legend>';
                    $Ib = ($ic ? '' : '~ ').$Dc;
                    echo checkbox('all', 1, 0, ($Dc !== false ? ($ic ? '' : '~ ').lang(['%d row', '%d rows'], $Dc) : ''), "var checked = formChecked(this, /check/); selectCount('selected', this.checked ? '$Ib' : checked); selectCount('selected2', this.checked || !checked ? '$Ib' : checked);")."\n","</fieldset>\n";
                    if ($b->selectCommandPrint()) {
                        echo '<fieldset',($_GET['modify'] ? '' : ' class="jsonly"'),'><legend>Modify</legend><div>
<input type="submit" value="Save"',($_GET['modify'] ? '' : ' title="'.'Ctrl+click on a value to modify it.'.'"'),'>
</div></fieldset>
<fieldset><legend>Selected <span id="selected"></span></legend><div>
<input type="submit" name="edit" value="Edit">
<input type="submit" name="clone" value="Clone">
<input type="submit" name="delete" value="Delete">',confirm(),'</div></fieldset>
';
                    }$Bc = $b->dumpFormat();
                    foreach ((array) $_GET['columns'] as $c) {
                        if ($c['fun']) {
                            unset($Bc['sql']);
                            break;
                        }
                    }if ($Bc) {
                        print_fieldset('export', 'Export'." <span id='selected2'></span>");
                        $Fe = $b->dumpOutput();
                        echo ($Fe ? html_select('output', $Fe, $ma['output']).' ' : ''),html_select('format', $Bc, $ma['format'])," <input type='submit' name='export' value='".'Export'."'>\n","</div></fieldset>\n";
                    }$b->selectEmailPrint(array_filter($Xb, 'strlen'), $d);
                }echo "</div></div>\n";
                if ($b->selectImportPrint()) {
                    echo '<div>',"<a href='#import'>".'Import'.'</a>',script("qsl('a').onclick = partial(toggle, 'import');", ''),"<span id='import' class='hidden'>: ","<input type='file' name='csv_file'> ",html_select('separator', ['csv' => 'CSV,', 'csv;' => 'CSV;', 'tsv' => 'TSV'], $ma['format'], 1);
                    echo " <input type='submit' name='import' value='".'Import'."'>",'</span>','</div>';
                }echo "<input type='hidden' name='token' value='$T'>\n","</form>\n",(! $s && $N ? '' : script('tableCheck();'));
            }
        }
    }if (is_ajax()) {
        ob_end_clean();
        exit;
    }
} elseif (isset($_GET['variables'])) {
    $fg = isset($_GET['status']);
    page_header($fg ? 'Status' : 'Variables');
    $ph = ($fg ? show_status() : show_variables());
    if (! $ph) {
        echo "<p class='message'>".'No rows.'."\n";
    } else {
        echo "<table cellspacing='0'>\n";
        foreach ($ph as $z => $X) {
            echo '<tr>',"<th><code class='jush-".$y.($fg ? 'status' : 'set')."'>".h($z).'</code>','<td>'.h($X);
        }echo "</table>\n";
    }
} elseif (isset($_GET['script'])) {
    header('Content-Type: text/javascript; charset=utf-8');
    if ($_GET['script'] == 'db') {
        $og = ['Data_length' => 0, 'Index_length' => 0, 'Data_free' => 0];
        foreach (table_status() as $E => $R) {
            json_row("Comment-$E", h($R['Comment']));
            if (! is_view($R)) {
                foreach (['Engine', 'Collation'] as $z) {
                    json_row("$z-$E", h($R[$z]));
                }foreach ($og + ['Auto_increment' => 0, 'Rows' => 0] as $z => $X) {
                    if ($R[$z] != '') {
                        $X = format_number($R[$z]);
                        json_row("$z-$E", ($z == 'Rows' && $X && $R['Engine'] == ($ag == 'pgsql' ? 'table' : 'InnoDB') ? "~ $X" : $X));
                        if (isset($og[$z])) {
                            $og[$z] += ($R['Engine'] != 'InnoDB' || $z != 'Data_free' ? $R[$z] : 0);
                        }
                    } elseif (array_key_exists($z, $R)) {
                        json_row("$z-$E");
                    }
                }
            }
        }foreach ($og as $z => $X) {
            json_row("sum-$z", format_number($X));
        }json_row('');
    } elseif ($_GET['script'] == 'kill') {
        $e->query('KILL '.number($_POST['kill']));
    } else {
        foreach (count_tables($b->databases()) as $i => $X) {
            json_row("tables-$i", $X);
            json_row("size-$i", db_size($i));
        }json_row('');
    }exit;
} else {
    $wg = array_merge((array) $_POST['tables'], (array) $_POST['views']);
    if ($wg && ! $k && ! $_POST['search']) {
        $J = true;
        $D = '';
        if ($y == 'sql' && $_POST['tables'] && count($_POST['tables']) > 1 && ($_POST['drop'] || $_POST['truncate'] || $_POST['copy'])) {
            queries('SET foreign_key_checks = 0');
        }if ($_POST['truncate']) {
            if ($_POST['tables']) {
                $J = truncate_tables($_POST['tables']);
            }$D = 'Tables have been truncated.';
        } elseif ($_POST['move']) {
            $J = move_tables((array) $_POST['tables'], (array) $_POST['views'], $_POST['target']);
            $D = 'Tables have been moved.';
        } elseif ($_POST['copy']) {
            $J = copy_tables((array) $_POST['tables'], (array) $_POST['views'], $_POST['target']);
            $D = 'Tables have been copied.';
        } elseif ($_POST['drop']) {
            if ($_POST['views']) {
                $J = drop_views($_POST['views']);
            }if ($J && $_POST['tables']) {
                $J = drop_tables($_POST['tables']);
            }$D = 'Tables have been dropped.';
        } elseif ($y != 'sql') {
            $J = ($y == 'sqlite' ? queries('VACUUM') : apply_queries('VACUUM'.($_POST['optimize'] ? '' : ' ANALYZE'), $_POST['tables']));
            $D = 'Tables have been optimized.';
        } elseif (! $_POST['tables']) {
            $D = 'No tables.';
        } elseif ($J = queries(($_POST['optimize'] ? 'OPTIMIZE' : ($_POST['check'] ? 'CHECK' : ($_POST['repair'] ? 'REPAIR' : 'ANALYZE'))).' TABLE '.implode(', ', array_map('idf_escape', $_POST['tables'])))) {
            while ($L = $J->fetch_assoc()) {
                $D .= '<b>'.h($L['Table']).'</b>: '.h($L['Msg_text']).'<br>';
            }
        }queries_redirect(substr(ME, 0, -1), $D, $J);
    }page_header(($_GET['ns'] == '' ? 'Database'.': '.h(DB) : 'Schema'.': '.h($_GET['ns'])), $k, true);
    if ($b->homepage()) {
        if ($_GET['ns'] !== '') {
            echo "<h3 id='tables-views'>".'Tables and views'."</h3>\n";
            $vg = tables_list();
            if (! $vg) {
                echo "<p class='message'>".'No tables.'."\n";
            } else {
                echo "<form action='' method='post'>\n";
                if (support('table')) {
                    echo '<fieldset><legend>'.'Search data in tables'." <span id='selected2'></span></legend><div>","<input type='search' name='query' value='".h($_POST['query'])."'>",script("qsl('input').onkeydown = partialArg(bodyKeydown, 'search');", '')," <input type='submit' name='search' value='".'Search'."'>\n","</div></fieldset>\n";
                    if ($_POST['search'] && $_POST['query'] != '') {
                        $_GET['where'][0]['op'] = 'LIKE %%';
                        search_tables();
                    }
                }echo "<div class='scrollable'>\n","<table cellspacing='0' class='nowrap checkable'>\n",script("mixin(qsl('table'), {onclick: tableClick, ondblclick: partialArg(tableClick, true)});"),'<thead><tr class="wrap">','<td><input id="check-all" type="checkbox" class="jsonly">'.script("qs('#check-all').onclick = partial(formCheck, /^(tables|views)\[/);", ''),'<th>'.'Table','<td>'.'Engine'.doc_link(['sql' => 'storage-engines.html']),'<td>'.'Collation'.doc_link(['sql' => 'charset-charsets.html', 'mariadb' => 'supported-character-sets-and-collations/']),'<td>'.'Data Length'.doc_link(['sql' => 'show-table-status.html']),'<td>'.'Index Length'.doc_link(['sql' => 'show-table-status.html']),'<td>'.'Data Free'.doc_link(['sql' => 'show-table-status.html']),'<td>'.'Auto Increment'.doc_link(['sql' => 'example-auto-increment.html', 'mariadb' => 'auto_increment/']),'<td>'.'Rows'.doc_link(['sql' => 'show-table-status.html']),(support('comment') ? '<td>'.'Comment'.doc_link(['sql' => 'show-table-status.html']) : ''),"</thead>\n";
                $S = 0;
                foreach ($vg as $E => $U) {
                    $sh = ($U !== null && ! preg_match('~table|sequence~i', $U));
                    $u = h('Table-'.$E);
                    echo '<tr'.odd().'><td>'.checkbox(($sh ? 'views[]' : 'tables[]'), $E, in_array($E, $wg, true), '', '', '', $u),'<th>'.(support('table') || support('indexes') ? "<a href='".h(ME).'table='.urlencode($E)."' title='".'Show structure'."' id='$u'>".h($E).'</a>' : h($E));
                    if ($sh) {
                        echo '<td colspan="6"><a href="'.h(ME).'view='.urlencode($E).'" title="'.'Alter view'.'">'.(preg_match('~materialized~i', $U) ? 'Materialized view' : 'View').'</a>','<td align="right"><a href="'.h(ME).'select='.urlencode($E).'" title="'.'Select data'.'">?</a>';
                    } else {
                        foreach (['Engine' => [], 'Collation' => [], 'Data_length' => ['create', 'Alter table'], 'Index_length' => ['indexes', 'Alter indexes'], 'Data_free' => ['edit', 'New item'], 'Auto_increment' => ['auto_increment=1&create', 'Alter table'], 'Rows' => ['select', 'Select data']] as $z => $A) {
                            $u = " id='$z-".h($E)."'";
                            echo $A ? "<td align='right'>".(support('table') || $z == 'Rows' || (support('indexes') && $z != 'Data_length') ? "<a href='".h(ME."$A[0]=").urlencode($E)."'$u title='$A[1]'>?</a>" : "<span$u>?</span>") : "<td id='$z-".h($E)."'>";
                        }$S++;
                    }echo support('comment') ? "<td id='Comment-".h($E)."'>" : '';
                }echo '<tr><td><th>'.sprintf('%d in total', count($vg)),'<td>'.h($y == 'sql' ? $e->result('SELECT @@default_storage_engine') : ''),'<td>'.h(db_collation(DB, collations()));
                foreach (['Data_length', 'Index_length', 'Data_free'] as $z) {
                    echo "<td align='right' id='sum-$z'>";
                }echo "</table>\n","</div>\n";
                if (! information_schema(DB)) {
                    echo "<div class='footer'><div>\n";
                    $nh = "<input type='submit' value='".'Vacuum'."'> ".on_help("'VACUUM'");
                    $te = "<input type='submit' name='optimize' value='".'Optimize'."'> ".on_help($y == 'sql' ? "'OPTIMIZE TABLE'" : "'VACUUM OPTIMIZE'");
                    echo '<fieldset><legend>'.'Selected'." <span id='selected'></span></legend><div>".($y == 'sqlite' ? $nh : ($y == 'pgsql' ? $nh.$te : ($y == 'sql' ? "<input type='submit' value='".'Analyze'."'> ".on_help("'ANALYZE TABLE'").$te."<input type='submit' name='check' value='".'Check'."'> ".on_help("'CHECK TABLE'")."<input type='submit' name='repair' value='".'Repair'."'> ".on_help("'REPAIR TABLE'") : '')))."<input type='submit' name='truncate' value='".'Truncate'."'> ".on_help($y == 'sqlite' ? "'DELETE'" : "'TRUNCATE".($y == 'pgsql' ? "'" : " TABLE'")).confirm()."<input type='submit' name='drop' value='".'Drop'."'>".on_help("'DROP TABLE'").confirm()."\n";
                    $h = (support('scheme') ? $b->schemas() : $b->databases());
                    if (count($h) != 1 && $y != 'sqlite') {
                        $i = (isset($_POST['target']) ? $_POST['target'] : (support('scheme') ? $_GET['ns'] : DB));
                        echo '<p>'.'Move to other database'.': ',($h ? html_select('target', $h, $i) : '<input name="target" value="'.h($i).'" autocapitalize="off">')," <input type='submit' name='move' value='".'Move'."'>",(support('copy') ? " <input type='submit' name='copy' value='".'Copy'."'> ".checkbox('overwrite', 1, $_POST['overwrite'], 'overwrite') : ''),"\n";
                    }echo "<input type='hidden' name='all' value=''>";
                    echo script("qsl('input').onclick = function () { selectCount('selected', formChecked(this, /^(tables|views)\[/));".(support('table') ? " selectCount('selected2', formChecked(this, /^tables\[/) || $S);" : '').' }'),"<input type='hidden' name='token' value='$T'>\n","</div></fieldset>\n","</div></div>\n";
                }echo "</form>\n",script('tableCheck();');
            }echo '<p class="links"><a href="'.h(ME).'create=">'.'Create table'."</a>\n",(support('view') ? '<a href="'.h(ME).'view=">'.'Create view'."</a>\n" : '');
            if (support('routine')) {
                echo "<h3 id='routines'>".'Routines'."</h3>\n";
                $Ef = routines();
                if ($Ef) {
                    echo "<table cellspacing='0'>\n",'<thead><tr><th>'.'Name'.'<td>'.'Type'.'<td>'.'Return type'."<td></thead>\n";
                    odd('');
                    foreach ($Ef as $L) {
                        $E = ($L['SPECIFIC_NAME'] == $L['ROUTINE_NAME'] ? '' : '&name='.urlencode($L['ROUTINE_NAME']));
                        echo '<tr'.odd().'>','<th><a href="'.h(ME.($L['ROUTINE_TYPE'] != 'PROCEDURE' ? 'callf=' : 'call=').urlencode($L['SPECIFIC_NAME']).$E).'">'.h($L['ROUTINE_NAME']).'</a>','<td>'.h($L['ROUTINE_TYPE']),'<td>'.h($L['DTD_IDENTIFIER']),'<td><a href="'.h(ME.($L['ROUTINE_TYPE'] != 'PROCEDURE' ? 'function=' : 'procedure=').urlencode($L['SPECIFIC_NAME']).$E).'">'.'Alter'.'</a>';
                    }echo "</table>\n";
                }echo '<p class="links">'.(support('procedure') ? '<a href="'.h(ME).'procedure=">'.'Create procedure'.'</a>' : '').'<a href="'.h(ME).'function=">'.'Create function'."</a>\n";
            }if (support('event')) {
                echo "<h3 id='events'>".'Events'."</h3>\n";
                $M = get_rows('SHOW EVENTS');
                if ($M) {
                    echo "<table cellspacing='0'>\n",'<thead><tr><th>'.'Name'.'<td>'.'Schedule'.'<td>'.'Start'.'<td>'.'End'."<td></thead>\n";
                    foreach ($M as $L) {
                        echo '<tr>','<th>'.h($L['Name']),'<td>'.($L['Execute at'] ? 'At given time'.'<td>'.$L['Execute at'] : 'Every'.' '.$L['Interval value'].' '.$L['Interval field']."<td>$L[Starts]"),"<td>$L[Ends]",'<td><a href="'.h(ME).'event='.urlencode($L['Name']).'">'.'Alter'.'</a>';
                    }echo "</table>\n";
                    $gc = $e->result('SELECT @@event_scheduler');
                    if ($gc && $gc != 'ON') {
                        echo "<p class='error'><code class='jush-sqlset'>event_scheduler</code>: ".h($gc)."\n";
                    }
                }echo '<p class="links"><a href="'.h(ME).'event=">'.'Create event'."</a>\n";
            }if ($vg) {
                echo script("ajaxSetHtml('".js_escape(ME)."script=db');");
            }
        }
    }
}page_footer();
