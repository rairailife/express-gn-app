// 1. 必要なモジュールのロード
var createError  = require('http-errors');   // Expressのエラー関連
var express      = require('express');       // Express本体
var path         = require('path');          // ファイルパスを扱うためのモジュール
var cookieParser = require('cookie-parser'); // クッキーのパース関連のモジュール
var logger       = require('morgan');        // HTTPリクエストのログ出力関連のモジュール

// 2. ルート用スクリプトのロード
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var helloRouter = require('./routes/hello');

// 3. Expressオブジェクトの作成と基本設定
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 4. app.useによる関数の組み込み
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 5. アクセスするルートとエラー用のapp.useの作成
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/hello', helloRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// 6. module.expressの設定
module.exports = app;
