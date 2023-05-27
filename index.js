(function(cjs, an) {
    var p;
    var lib = {};
    var ss = {};
    var img = {};
    lib.ssMetadata = [];
    (lib.Bitmap1 = function() {
        this.initialize(img.Bitmap1);
    }
    ).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,13,13);
    function mc_symbol_clone() {
        var clone = this._cloneProps(new this.constructor(this.mode,this.startPosition,this.loop));
        clone.gotoAndStop(this.currentFrame);
        clone.paused = this.paused;
        clone.framerate = this.framerate;
        return clone;
    }
    function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
        var prototype = cjs.extend(symbol, cjs.MovieClip);
        prototype.clone = mc_symbol_clone;
        prototype.nominalBounds = nominalBounds;
        prototype.frameBounds = frameBounds;
        return prototype;
    }
    (lib.Symbol1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["#F9FAFF", "#E6E9FF"], [0, 1], 0, -24, 0, 24).s().p("A+EDwIAAnfMA8JAAAIAAHfg");
        this.shape.setTransform(192.5, 0);
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }
    ).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,-24,384.9,48), null);
    (lib.an_RadioButton = function(options) {
        this._element = new $.an.RadioButton(options);
        this._el = this._element.create();
        var $this = this;
        this.addEventListener('added', function() {
            $this._lastAddedFrame = $this.parent.currentFrame;
            $this._element.attach($('#dom_overlay_container'));
        });
    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,100,22);
    p._tick = _tick;
    p._handleDrawEnd = _handleDrawEnd;
    p._updateVisibility = _updateVisibility;
    (lib.an_NumericStepper = function(options) {
        this._element = new $.an.NumericStepper(options);
        this._el = this._element.create();
        var $this = this;
        this.addEventListener('added', function() {
            $this._lastAddedFrame = $this.parent.currentFrame;
            $this._element.attach($('#dom_overlay_container'));
        });
    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,120,22);
    p._tick = _tick;
    p._handleDrawEnd = _handleDrawEnd;
    p._updateVisibility = _updateVisibility;
    (lib.an_Label = function(options) {
        this._element = new $.an.Label(options);
        this._el = this._element.create();
        var $this = this;
        this.addEventListener('added', function() {
            $this._lastAddedFrame = $this.parent.currentFrame;
            $this._element.attach($('#dom_overlay_container'));
        });
    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,100,22);
    p._tick = _tick;
    p._handleDrawEnd = _handleDrawEnd;
    p._updateVisibility = _updateVisibility;
    (lib.onlinestopwatchcom = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AAbAdIAAgfQAAgJgCgCQgCgEgEAAQgDAAgDACQgDACgBAEIgBALIAAAbIgOAAIAAgeQAAgIgBgDIgDgDQAAgBgBAAQAAAAgBAAQAAgBgBAAQgBAAAAAAQgEAAgDACQgCACgCAEIgBALIAAAbIgPAAIAAg4IAOAAIAAAIQAHgJALAAQAFAAAEACQADACADAFQAEgFAEgCQAEgCAFAAQAHAAAEACQAEADACAFQACAEAAAIIAAAjg");
        this.shape.setTransform(278.4, 10.8);
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFFFFF").s().p("AgOAaQgHgDgEgHQgEgHAAgJQAAgHAEgIQAEgGAHgEQAGgEAIAAQANAAAIAJQAJAIAAAMQAAANgJAIQgIAJgNAAQgHAAgHgEgAgJgMQgEAEAAAIQAAAJAEAEQAEAEAFAAQAGAAAEgEQADgEAAgJQAAgIgDgEQgEgEgGgBQgFABgEAEg");
        this.shape_1.setTransform(269.2, 10.9);
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#FFFFFF").s().p("AgSAWQgIgIAAgOQAAgNAIgIQAHgIALAAQALAAAHAEQAFAFADAKIgPACQAAgFgDgCQgDgCgEAAQgFAAgDAEQgEAEABAJQgBAJAEAFQADADAFAAQAEAAADgCQADgDABgFIAPACQgCAKgHAGQgGAFgMAAQgLAAgHgIg");
        this.shape_2.setTransform(261.9, 10.9);
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#FFFFFF").s().p("AgHAHIAAgNIAOAAIAAANg");
        this.shape_3.setTransform(256.2, 13);
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FFFFFF").s().p("AAKAnIAAgeIAAgKIgDgEQgCgCgEAAQgCAAgDACQgEACgBADQgBADAAAIIAAAcIgPAAIAAhNIAPAAIAAAcQAHgIAKAAQAEAAAFACQAEACACADIADAGIABALIAAAhg");
        this.shape_4.setTransform(250.4, 9.8);
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#FFFFFF").s().p("AgTAWQgHgIAAgOQAAgNAHgIQAIgIAMAAQAKAAAGAEQAHAFACAKIgOACQgBgFgDgCQgDgCgEAAQgFAAgDAEQgDAEgBAJQABAJADAFQADADAFAAQAEAAADgCQADgDABgFIAPACQgDAKgGAGQgHAFgKAAQgMAAgIgIg");
        this.shape_5.setTransform(243, 10.9);
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#FFFFFF").s().p("AgCAmQgDgCgBgCIgDgGIAAgKIAAgYIgHAAIAAgMIAHAAIAAgMIAOgIIAAAUIAKAAIAAAMIgKAAIAAAWIAAAIIACACIACABIAGgCIACAMQgGACgGAAQgEAAgDgBg");
        this.shape_6.setTransform(237.1, 9.9);
        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#FFFFFF").s().p("AgVAZQgFgFAAgHQAAgFACgDQADgFAEAAIAMgEIAOgEIAAgBQAAgFgDgCQgCgBgFAAQgEAAgCABQgCACgCAEIgNgCQACgJAGgEQAFgEALAAQAKAAAEACQAFADACAEQACADAAAKIAAARIABALIADAHIgPAAIgCgEIAAgBIgIAFQgEACgFAAQgJAAgFgFgAAAADIgIADQgDACAAADQAAAEADACQACACAEAAQADAAADgCQADgCABgEIABgHIAAgDIgJACg");
        this.shape_7.setTransform(231.2, 10.9);
        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#FFFFFF").s().p("AAJAcIgJgjIgJAjIgPAAIgSg3IAPAAIALAkIAJgkIAOAAIAKAkIAKgkIAQAAIgTA3g");
        this.shape_8.setTransform(222.7, 10.9);
        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#FFFFFF").s().p("AgbAoIAAhNIAOAAIAAAIQADgEAFgDQAEgDAFAAQAKAAAHAIQAHAIAAAOQAAANgHAIQgHAIgKAAQgEAAgEgCIgIgHIAAAdgAgIgWQgEAEAAAIQAAAKAEADQAEAFAEAAQAGAAADgEQADgEAAgJQAAgJgDgEQgEgFgFAAQgFAAgDAFg");
        this.shape_9.setTransform(214.2, 11.9);
        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#FFFFFF").s().p("AgOAaQgHgDgEgHQgDgHAAgJQAAgHADgIQAEgGAGgEQAIgEAHAAQAMAAAJAJQAIAIAAAMQAAANgIAIQgJAJgMAAQgHAAgHgEgAgJgMQgEAEAAAIQAAAJAEAEQAEAEAFAAQAGAAAEgEQAEgEgBgJQABgIgEgEQgEgEgGgBQgFABgEAEg");
        this.shape_10.setTransform(206.4, 10.9);
        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#FFFFFF").s().p("AgBAmQgEgCgCgCIgBgGIgBgKIAAgYIgHAAIAAgMIAHAAIAAgMIAOgIIAAAUIALAAIAAAMIgLAAIAAAWIABAIIABACIACABIAHgCIABAMQgGACgGAAQgEAAgCgBg");
        this.shape_11.setTransform(200.2, 9.9);
        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#FFFFFF").s().p("AgRAZQgHgEgCgJIAPgCQABAFADACQADACAFAAQAGAAACgCQABgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBIgBgCIgFgCQgRgEgFgEQgHgDAAgIQAAgIAGgFQAGgFAMAAQALAAAGAEQAGAEACAHIgPADQAAgDgDgCQgDgCgEAAQgFAAgDABQAAABgBAAQAAABAAAAQAAAAgBABQAAAAAAAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAABABQACABALACQAMADAFAEQAFAEAAAGQAAAJgHAFQgGAGgNAAQgLAAgHgFg");
        this.shape_12.setTransform(194.2, 10.9);
        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#FFFFFF").s().p("AgOAIIAAgPIAdAAIAAAPg");
        this.shape_13.setTransform(188.7, 10.9);
        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#FFFFFF").s().p("AgUAUQgGgIAAgMQAAgNAIgIQAHgIALAAQAMAAAHAJQAIAIAAARIglAAQAAAGADAEQAEADAEAAQAEAAACgBIAEgHIAPADQgDAIgGAFQgHAEgJAAQgOAAgHgKgAgHgOQgDAEAAAGIAWAAQgBgGgDgEQgDgDgFAAQgEgBgDAEg");
        this.shape_14.setTransform(182.5, 10.9);
        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#FFFFFF").s().p("AAKAdIAAgdQAAgIgBgDQAAgDgCgBQgCgCgEAAQgCAAgDADQgEACgBADIgBAMIAAAaIgPAAIAAg4IAOAAIAAAJQAIgKAKAAQAFAAAEACQAEACACACIADAHIABAKIAAAig");
        this.shape_15.setTransform(175.2, 10.8);
        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f("#FFFFFF").s().p("AgGAnIAAg4IANAAIAAA4gAgGgZIAAgNIANAAIAAANg");
        this.shape_16.setTransform(169.3, 9.8);
        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#FFFFFF").s().p("AgGAnIAAhNIANAAIAABNg");
        this.shape_17.setTransform(165.3, 9.8);
        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f("#FFFFFF").s().p("AALAdIAAgdQAAgIgBgDQgBgDgDgBQgCgCgCAAQgEAAgDADQgDACgBADIgBAMIAAAaIgPAAIAAg4IAOAAIAAAJQAIgKAJAAQAGAAADACQAFACACACIADAHIABAKIAAAig");
        this.shape_18.setTransform(159.4, 10.8);
        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f("#FFFFFF").s().p("AgOAaQgHgDgEgHQgEgHABgJQgBgHAEgIQAEgGAGgEQAIgEAHAAQAMAAAJAJQAJAIgBAMQABANgJAIQgJAJgMAAQgHAAgHgEgAgJgMQgEAEAAAIQAAAJAEAEQAEAEAFAAQAFAAAFgEQAEgEAAgJQAAgIgEgEQgFgEgFgBQgFABgEAEg");
        this.shape_19.setTransform(151.7, 10.9);
        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f("#FFFFFF").s().p("AgGAHIAAgNIANAAIAAANg");
        this.shape_20.setTransform(145.8, 13);
        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f("#FFFFFF").s().p("AAJAcIgJgjIgJAjIgOAAIgSg3IAOAAIALAkIAJgkIAOAAIAJAkIALgkIAPAAIgSA3g");
        this.shape_21.setTransform(138.9, 10.9);
        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f("#FFFFFF").s().p("AAKAcIgKgjIgJAjIgOAAIgSg3IAOAAIALAkIAKgkIANAAIAJAkIAMgkIAOAAIgSA3g");
        this.shape_22.setTransform(129.2, 10.9);
        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.f("#FFFFFF").s().p("AAKAcIgKgjIgJAjIgPAAIgSg3IAPAAIALAkIAKgkIANAAIAKAkIALgkIAOAAIgSA3g");
        this.shape_23.setTransform(119.5, 10.9);
        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.f("#A2DAFF").s().p("AAbAdIAAgfQAAgJgCgCQgCgEgEAAQgDAAgDACQgDACgBAEIgBALIAAAbIgOAAIAAgeQAAgIgBgDIgDgDQAAgBgBAAQAAAAgBAAQAAgBgBAAQgBAAAAAAQgEAAgDACQgCACgCAEIgBALIAAAbIgPAAIAAg4IAOAAIAAAIQAHgJALAAQAFAAAEACQADACADAFQAEgFAEgCQAEgCAFAAQAHAAAEACQAEADACAFQACAEAAAIIAAAjg");
        this.shape_24.setTransform(278.4, 10.8);
        this.shape_25 = new cjs.Shape();
        this.shape_25.graphics.f("#A2DAFF").s().p("AgOAaQgHgDgEgHQgEgHAAgJQAAgHAEgIQAEgGAHgEQAGgEAIAAQANAAAIAJQAJAIAAAMQAAANgJAIQgIAJgNAAQgHAAgHgEgAgJgMQgEAEAAAIQAAAJAEAEQAEAEAFAAQAGAAAEgEQADgEAAgJQAAgIgDgEQgEgEgGgBQgFABgEAEg");
        this.shape_25.setTransform(269.2, 10.9);
        this.shape_26 = new cjs.Shape();
        this.shape_26.graphics.f("#A2DAFF").s().p("AgSAWQgIgIAAgOQAAgNAIgIQAHgIALAAQALAAAHAEQAFAFADAKIgPACQAAgFgDgCQgDgCgEAAQgFAAgDAEQgEAEABAJQgBAJAEAFQADADAFAAQAEAAADgCQADgDABgFIAPACQgCAKgHAGQgGAFgMAAQgLAAgHgIg");
        this.shape_26.setTransform(261.9, 10.9);
        this.shape_27 = new cjs.Shape();
        this.shape_27.graphics.f("#A2DAFF").s().p("AgHAHIAAgNIAOAAIAAANg");
        this.shape_27.setTransform(256.2, 13);
        this.shape_28 = new cjs.Shape();
        this.shape_28.graphics.f("#A2DAFF").s().p("AAKAnIAAgeIAAgKIgDgEQgCgCgEAAQgCAAgDACQgEACgBADQgBADAAAIIAAAcIgPAAIAAhNIAPAAIAAAcQAHgIAKAAQAEAAAFACQAEACACADIADAGIABALIAAAhg");
        this.shape_28.setTransform(250.4, 9.8);
        this.shape_29 = new cjs.Shape();
        this.shape_29.graphics.f("#A2DAFF").s().p("AgTAWQgHgIAAgOQAAgNAHgIQAIgIAMAAQAKAAAGAEQAHAFACAKIgOACQgBgFgDgCQgDgCgEAAQgFAAgDAEQgDAEgBAJQABAJADAFQADADAFAAQAEAAADgCQADgDABgFIAPACQgDAKgGAGQgHAFgKAAQgMAAgIgIg");
        this.shape_29.setTransform(243, 10.9);
        this.shape_30 = new cjs.Shape();
        this.shape_30.graphics.f("#A2DAFF").s().p("AgCAmQgDgCgBgCIgDgGIAAgKIAAgYIgHAAIAAgMIAHAAIAAgMIAOgIIAAAUIAKAAIAAAMIgKAAIAAAWIAAAIIACACIACABIAGgCIACAMQgGACgGAAQgEAAgDgBg");
        this.shape_30.setTransform(237.1, 9.9);
        this.shape_31 = new cjs.Shape();
        this.shape_31.graphics.f("#A2DAFF").s().p("AgVAZQgFgFAAgHQAAgFACgDQADgFAEAAIAMgEIAOgEIAAgBQAAgFgDgCQgCgBgFAAQgEAAgCABQgCACgCAEIgNgCQACgJAGgEQAFgEALAAQAKAAAEACQAFADACAEQACADAAAKIAAARIABALIADAHIgPAAIgCgEIAAgBIgIAFQgEACgFAAQgJAAgFgFgAAAADIgIADQgDACAAADQAAAEADACQACACAEAAQADAAADgCQADgCABgEIABgHIAAgDIgJACg");
        this.shape_31.setTransform(231.2, 10.9);
        this.shape_32 = new cjs.Shape();
        this.shape_32.graphics.f("#A2DAFF").s().p("AAJAcIgJgjIgJAjIgPAAIgSg3IAPAAIALAkIAJgkIAOAAIAKAkIAKgkIAQAAIgTA3g");
        this.shape_32.setTransform(222.7, 10.9);
        this.shape_33 = new cjs.Shape();
        this.shape_33.graphics.f("#A2DAFF").s().p("AgbAoIAAhNIAOAAIAAAIQADgEAFgDQAEgDAFAAQAKAAAHAIQAHAIAAAOQAAANgHAIQgHAIgKAAQgEAAgEgCIgIgHIAAAdgAgIgWQgEAEAAAIQAAAKAEADQAEAFAEAAQAGAAADgEQADgEAAgJQAAgJgDgEQgEgFgFAAQgFAAgDAFg");
        this.shape_33.setTransform(214.2, 11.9);
        this.shape_34 = new cjs.Shape();
        this.shape_34.graphics.f("#A2DAFF").s().p("AgOAaQgHgDgEgHQgDgHAAgJQAAgHADgIQAEgGAGgEQAIgEAHAAQAMAAAJAJQAIAIAAAMQAAANgIAIQgJAJgMAAQgHAAgHgEgAgJgMQgEAEAAAIQAAAJAEAEQAEAEAFAAQAGAAAEgEQAEgEgBgJQABgIgEgEQgEgEgGgBQgFABgEAEg");
        this.shape_34.setTransform(206.4, 10.9);
        this.shape_35 = new cjs.Shape();
        this.shape_35.graphics.f("#A2DAFF").s().p("AgBAmQgEgCgCgCIgBgGIgBgKIAAgYIgHAAIAAgMIAHAAIAAgMIAOgIIAAAUIALAAIAAAMIgLAAIAAAWIABAIIABACIACABIAHgCIABAMQgGACgGAAQgEAAgCgBg");
        this.shape_35.setTransform(200.2, 9.9);
        this.shape_36 = new cjs.Shape();
        this.shape_36.graphics.f("#A2DAFF").s().p("AgRAZQgHgEgCgJIAPgCQABAFADACQADACAFAAQAGAAACgCQABgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBIgBgCIgFgCQgRgEgFgEQgHgDAAgIQAAgIAGgFQAGgFAMAAQALAAAGAEQAGAEACAHIgPADQAAgDgDgCQgDgCgEAAQgFAAgDABQAAABgBAAQAAABAAAAQAAAAgBABQAAAAAAAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAABABQACABALACQAMADAFAEQAFAEAAAGQAAAJgHAFQgGAGgNAAQgLAAgHgFg");
        this.shape_36.setTransform(194.2, 10.9);
        this.shape_37 = new cjs.Shape();
        this.shape_37.graphics.f("#A2DAFF").s().p("AgOAIIAAgPIAdAAIAAAPg");
        this.shape_37.setTransform(188.7, 10.9);
        this.shape_38 = new cjs.Shape();
        this.shape_38.graphics.f("#A2DAFF").s().p("AgUAUQgGgIAAgMQAAgNAIgIQAHgIALAAQAMAAAHAJQAIAIAAARIglAAQAAAGADAEQAEADAEAAQAEAAACgBIAEgHIAPADQgDAIgGAFQgHAEgJAAQgOAAgHgKgAgHgOQgDAEAAAGIAWAAQgBgGgDgEQgDgDgFAAQgEgBgDAEg");
        this.shape_38.setTransform(182.5, 10.9);
        this.shape_39 = new cjs.Shape();
        this.shape_39.graphics.f("#A2DAFF").s().p("AAKAdIAAgdQAAgIgBgDQAAgDgCgBQgCgCgEAAQgCAAgDADQgEACgBADIgBAMIAAAaIgPAAIAAg4IAOAAIAAAJQAIgKAKAAQAFAAAEACQAEACACACIADAHIABAKIAAAig");
        this.shape_39.setTransform(175.2, 10.8);
        this.shape_40 = new cjs.Shape();
        this.shape_40.graphics.f("#A2DAFF").s().p("AgGAnIAAg4IANAAIAAA4gAgGgZIAAgNIANAAIAAANg");
        this.shape_40.setTransform(169.3, 9.8);
        this.shape_41 = new cjs.Shape();
        this.shape_41.graphics.f("#A2DAFF").s().p("AgGAnIAAhNIANAAIAABNg");
        this.shape_41.setTransform(165.3, 9.8);
        this.shape_42 = new cjs.Shape();
        this.shape_42.graphics.f("#A2DAFF").s().p("AALAdIAAgdQAAgIgBgDQgBgDgDgBQgCgCgCAAQgEAAgDADQgDACgBADIgBAMIAAAaIgPAAIAAg4IAOAAIAAAJQAIgKAJAAQAGAAADACQAFACACACIADAHIABAKIAAAig");
        this.shape_42.setTransform(159.4, 10.8);
        this.shape_43 = new cjs.Shape();
        this.shape_43.graphics.f("#A2DAFF").s().p("AgOAaQgHgDgEgHQgEgHABgJQgBgHAEgIQAEgGAGgEQAIgEAHAAQAMAAAJAJQAJAIgBAMQABANgJAIQgJAJgMAAQgHAAgHgEgAgJgMQgEAEAAAIQAAAJAEAEQAEAEAFAAQAFAAAFgEQAEgEAAgJQAAgIgEgEQgFgEgFgBQgFABgEAEg");
        this.shape_43.setTransform(151.7, 10.9);
        this.shape_44 = new cjs.Shape();
        this.shape_44.graphics.f("#A2DAFF").s().p("AgGAHIAAgNIANAAIAAANg");
        this.shape_44.setTransform(145.8, 13);
        this.shape_45 = new cjs.Shape();
        this.shape_45.graphics.f("#A2DAFF").s().p("AAJAcIgJgjIgJAjIgOAAIgSg3IAOAAIALAkIAJgkIAOAAIAJAkIALgkIAPAAIgSA3g");
        this.shape_45.setTransform(138.9, 10.9);
        this.shape_46 = new cjs.Shape();
        this.shape_46.graphics.f("#A2DAFF").s().p("AAKAcIgKgjIgJAjIgOAAIgSg3IAOAAIALAkIAKgkIANAAIAJAkIAMgkIAOAAIgSA3g");
        this.shape_46.setTransform(129.2, 10.9);
        this.shape_47 = new cjs.Shape();
        this.shape_47.graphics.f("#A2DAFF").s().p("AAKAcIgKgjIgJAjIgPAAIgSg3IAPAAIALAkIAKgkIANAAIAKAkIALgkIAOAAIgSA3g");
        this.shape_47.setTransform(119.5, 10.9);
        this.shape_48 = new cjs.Shape();
        this.shape_48.graphics.f("#A2DAFF").s().p("A7VBYIAAivMA2rAAAIAACvg");
        this.shape_48.setTransform(176, 9.8);
        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_23
            }, {
                t: this.shape_22
            }, {
                t: this.shape_21
            }, {
                t: this.shape_20
            }, {
                t: this.shape_19
            }, {
                t: this.shape_18
            }, {
                t: this.shape_17
            }, {
                t: this.shape_16
            }, {
                t: this.shape_15
            }, {
                t: this.shape_14
            }, {
                t: this.shape_13
            }, {
                t: this.shape_12
            }, {
                t: this.shape_11
            }, {
                t: this.shape_10
            }, {
                t: this.shape_9
            }, {
                t: this.shape_8
            }, {
                t: this.shape_7
            }, {
                t: this.shape_6
            }, {
                t: this.shape_5
            }, {
                t: this.shape_4
            }, {
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).to({
            state: [{
                t: this.shape_47
            }, {
                t: this.shape_46
            }, {
                t: this.shape_45
            }, {
                t: this.shape_44
            }, {
                t: this.shape_43
            }, {
                t: this.shape_42
            }, {
                t: this.shape_41
            }, {
                t: this.shape_40
            }, {
                t: this.shape_39
            }, {
                t: this.shape_38
            }, {
                t: this.shape_37
            }, {
                t: this.shape_36
            }, {
                t: this.shape_35
            }, {
                t: this.shape_34
            }, {
                t: this.shape_33
            }, {
                t: this.shape_32
            }, {
                t: this.shape_31
            }, {
                t: this.shape_30
            }, {
                t: this.shape_29
            }, {
                t: this.shape_28
            }, {
                t: this.shape_27
            }, {
                t: this.shape_26
            }, {
                t: this.shape_25
            }, {
                t: this.shape_24
            }]
        }, 1).to({
            state: [{
                t: this.shape_47
            }, {
                t: this.shape_46
            }, {
                t: this.shape_45
            }, {
                t: this.shape_44
            }, {
                t: this.shape_43
            }, {
                t: this.shape_42
            }, {
                t: this.shape_41
            }, {
                t: this.shape_40
            }, {
                t: this.shape_39
            }, {
                t: this.shape_38
            }, {
                t: this.shape_37
            }, {
                t: this.shape_36
            }, {
                t: this.shape_35
            }, {
                t: this.shape_34
            }, {
                t: this.shape_33
            }, {
                t: this.shape_32
            }, {
                t: this.shape_31
            }, {
                t: this.shape_30
            }, {
                t: this.shape_29
            }, {
                t: this.shape_28
            }, {
                t: this.shape_27
            }, {
                t: this.shape_26
            }, {
                t: this.shape_25
            }, {
                t: this.shape_24
            }]
        }, 1).to({
            state: [{
                t: this.shape_48
            }]
        }, 1).wait(1));
    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,1.5,399.5,16.6);
    (lib.grc_screen = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            loopA: 34
        });
        this.frame_0 = function() {
            this.stop();
        }
        this.frame_33 = function() {
            this.gotoAndStop(0);
        }
        this.frame_70 = function() {
            this.gotoAndPlay("loopA");
        }
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(33).call(this.frame_33).wait(37).call(this.frame_70).wait(1));
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#303030").ss(3, 1, 1).p("AeFjWIAAGtQAACwitAEMg2oAAAQi0AAAAi0IAAmtQAAi0C0AAMA2oAAAQCtAEAACwg");
        this.shape.setTransform(192.5, 39.5);
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#E6E9FF").s().p("A7QGLQizAAgBi0IAAmtQABi0CzAAMA2oAAAQCtAEAACwIAAGtQAACwitAEg");
        this.shape_1.setTransform(192.5, 39.5);
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#F9757A").s().p("A7QGLQizAAgBi0IAAmtQABi0CzAAMA2oAAAQCtAEAACwIAAGtQAACwitAEg");
        this.shape_2.setTransform(192.5, 39.5);
        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).to({
            state: [{
                t: this.shape_2
            }, {
                t: this.shape
            }]
        }, 1).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }, 5).to({
            state: [{
                t: this.shape_2
            }, {
                t: this.shape
            }]
        }, 7).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }, 7).to({
            state: [{
                t: this.shape_2
            }, {
                t: this.shape
            }]
        }, 7).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }, 6).to({
            state: [{
                t: this.shape_2
            }, {
                t: this.shape
            }]
        }, 1).to({
            state: [{
                t: this.shape_2
            }, {
                t: this.shape
            }]
        }, 17).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }, 1).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }, 18).wait(1));
    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,387.9,82);
    (lib.grc_blue_bars = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#003399").s().p("A/PBkIAAjHMA+fAAAIAADHg");
        this.shape.setTransform(200, 275);
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#003399").s().p("A/PBkIAAjHMA+fAAAIAADHg");
        this.shape_1.setTransform(200, 10);
        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1));
    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,400,285);
    (lib.grc_stop = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.frame_0 = function() {
            this.stop();
        }
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#303030").ss(3, 1, 1).p("ALODUIAAmnQAAhFhFAAI0RAAQhFAAAABFIAAGnQAABFBFAAIURAAQBFAAAAhFg");
        this.shape.setTransform(71.8, 28.1);
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.lf(["#FF0000", "#DD0000"], [0, 1], 0, -28.6, 0, 28.6).s().p("AqIEZQhFAAAAhFIAAmnQAAhFBFAAIURAAQBFAAAABFIAAGnQAABFhFAAg");
        this.shape_1.setTransform(71.8, 28.1);
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.lf(["#C90000", "#A60000"], [0, 1], 0, -28.6, 0, 28.6).s().p("AqIEZQhFAAAAhFIAAmnQAAhFBFAAIURAAQBFAAAABFIAAGnQAABFhFAAg");
        this.shape_2.setTransform(71.8, 28.1);
        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).to({
            state: [{
                t: this.shape_2
            }, {
                t: this.shape
            }]
        }, 1).wait(1));
    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,146.6,59.2);
    (lib.grc_start = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.frame_0 = function() {
            this.stop();
        }
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#303030").ss(3, 1, 1).p("ALODUIAAmnQAAhFhFAAI0RAAQhFAAAABFIAAGnQAABFBFAAIURAAQBFAAAAhFg");
        this.shape.setTransform(71.8, 28.1);
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.lf(["#00CC66", "#008A45"], [0, 1], 0, -27.4, 0, 27.4).s().p("AqIEZQhFAAAAhFIAAmnQAAhFBFAAIURAAQBFAAAABFIAAGnQAABFhFAAg");
        this.shape_1.setTransform(71.8, 28.1);
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.lf(["#00E170", "#00B359"], [0, 1], 0, -27.4, 0, 27.4).s().p("AqIEZQhFAAAAhFIAAmnQAAhFBFAAIURAAQBFAAAABFIAAGnQAABFhFAAg");
        this.shape_2.setTransform(71.8, 28.1);
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.lf(["#00CCCC", "#007E7E"], [0, 1], 0, -27.4, 0, 27.4).s().p("AqIEZQhFAAAAhFIAAmnQAAhFBFAAIURAAQBFAAAABFIAAGnQAABFhFAAg");
        this.shape_3.setTransform(71.8, 28.1);
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.lf(["#00A6A6", "#006464"], [0, 1], 0, -27.4, 0, 27.4).s().p("AqIEZQhFAAAAhFIAAmnQAAhFBFAAIURAAQBFAAAABFIAAGnQAABFhFAAg");
        this.shape_4.setTransform(71.8, 28.1);
        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).to({
            state: [{
                t: this.shape_2
            }, {
                t: this.shape
            }]
        }, 1).to({
            state: [{
                t: this.shape_3
            }, {
                t: this.shape
            }]
        }, 1).to({
            state: [{
                t: this.shape_4
            }, {
                t: this.shape
            }]
        }, 1).wait(1));
    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,146.6,59.2);
    (lib.grc_set = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#303030").ss(3, 1, 1).p("AHeBoIAAjPQAAgygyAAItXAAQgyAAAAAyIAADPQAAAyAyAAINXAAQAyAAAAgyg");
        this.shape.setTransform(47.8, 15.4);
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.lf(["#0AFF0A", "#059A05"], [0, 1], 0.1, -14.9, 0.1, 15).s().p("AmrCaQgyAAAAgyIAAjPQAAgyAyAAINXAAQAyAAAAAyIAADPQAAAygyAAg");
        this.shape_1.setTransform(47.8, 15.4);
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f().s("#303030").ss(3, 1, 1).p("AndBoIAAjPQAAgyAyAAINXAAQAyAAAAAyIAADPQAAAygyAAItXAAQgyAAAAgyg");
        this.shape_2.setTransform(47.8, 15.4);
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.lf(["#00C600", "#047C04"], [0, 1], 0.1, -17, 0.1, 17.1).s().p("AmrCaQgyAAAAgyIAAjPQAAgyAyAAINXAAQAyAAAAAyIAADPQAAAygyAAg");
        this.shape_3.setTransform(47.8, 15.4);
        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).to({
            state: [{
                t: this.shape_3
            }, {
                t: this.shape_2
            }]
        }, 1).wait(1));
    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,98.6,33.8);
    (lib.grc_num = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#303030").ss(3, 1, 1).p("AjIiaIGRAAQAnAAAAAoIAADmQAAAngnAAImRAAQgnAAAAgnIAAjmQAAgoAnAAg");
        this.shape.setTransform(24, 15.5);
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.lf(["#0AFF0A", "#059A05"], [0, 1], 0, -15.3, 0, 15.3).s().p("AjICaQgnAAAAgmIAAjnQAAgnAnAAIGRAAQAnAAAAAnIAADnQAAAmgnAAg");
        this.shape_1.setTransform(24, 15.5);
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.lf(["#00CC00", "#057705"], [0, 1], 0, -15.3, 0, 15.3).s().p("AjICaQgnAAAAgmIAAjnQAAgnAnAAIGRAAQAnAAAAAnIAADnQAAAmgnAAg");
        this.shape_2.setTransform(24, 15.5);
        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).to({
            state: [{
                t: this.shape_2
            }, {
                t: this.shape
            }]
        }, 1).wait(1));
    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,51.1,33.9);
    (lib.grc_clear = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#303030").ss(3, 1, 1).p("AHehnIAADPQAAAygyAAItXAAQgyAAAAgyIAAjPQAAgyAyAAINXAAQAyAAAAAyg");
        this.shape.setTransform(47.8, 15.4);
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.lf(["#CCCCCC", "#999999"], [0, 1], 0.1, -14.3, 0.1, 14.4).s().p("AmrCaQgyAAAAgyIAAjPQAAgyAyAAINXAAQAyAAAAAyIAADPQAAAygyAAg");
        this.shape_1.setTransform(47.8, 15.4);
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.lf(["#999999", "#666666"], [0, 1], 0.1, -14.3, 0.1, 14.4).s().p("AmrCaQgyAAAAgyIAAjPQAAgyAyAAINXAAQAyAAAAAyIAADPQAAAygyAAg");
        this.shape_2.setTransform(47.8, 15.4);
        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).to({
            state: [{
                t: this.shape_2
            }, {
                t: this.shape
            }]
        }, 1).wait(1));
    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,98.6,33.8);
    (lib.grc_back = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.txt_back = new cjs.Text("Back","12px 'Arial'","#FFFFFF");
        this.txt_back.name = "txt_back";
        this.txt_back.lineHeight = 14;
        this.txt_back.lineWidth = 171;
        this.txt_back.parent = this;
        this.txt_back.setTransform(33, 6.6);
        this.timeline.addTween(cjs.Tween.get(this.txt_back).wait(4));
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#00FF00").s().p("AgQBIIhKg9IgBAAIAAAAIAAgBIgCAAQgEgEAAgFIAAgBQAAgGAEgDIBNg/QADgCAFAAQAFAAADADQADAEAAAEIAAAZIBRgMQAGAAAEADQAEADAAAGIAABNQAAAEgEAEQgEAEgGAAIhRgNIAAAaQAAAEgDADQgDAEgFAAQgFAAgDgDg");
        this.shape.setTransform(14.7, 13.1);
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#B9FE8B").s().p("AgQBIIhKg9IgBAAIAAAAIAAgBIgCAAQgEgEAAgFIAAgBQAAgGAEgDIBNg/QADgCAFAAQAFAAADADQADAEAAAEIAAAZIBRgMQAGAAAEADQAEADAAAGIAABNQAAAEgEAEQgEAEgGAAIhRgNIAAAaQAAAEgDADQgDAEgFAAQgFAAgDgDg");
        this.shape_1.setTransform(14.7, 13.1);
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#FF0000").s().p("AsJCIIAAkPIYTAAIAAEPg");
        this.shape_2.setTransform(0, 13.6, 0.634, 1, 0, 0, 0, -77.8, 0);
        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape
            }]
        }).to({
            state: [{
                t: this.shape_1
            }]
        }, 1).to({
            state: [{
                t: this.shape_1
            }]
        }, 1).to({
            state: [{
                t: this.shape_2
            }]
        }, 1).wait(1));
    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(4.9,4.6,201,17.3);
    (lib.an_Checkbox = function(options) {
        this._element = new $.an.Checkbox(options);
        this._el = this._element.create();
        var $this = this;
        this.addEventListener('added', function() {
            $this._lastAddedFrame = $this.parent.currentFrame;
            $this._element.attach($('#dom_overlay_container'));
        });
    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,100,22);
    p._tick = _tick;
    p._handleDrawEnd = _handleDrawEnd;
    p._updateVisibility = _updateVisibility;
    (lib.audio = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.frame_0 = function() {
            this.stop();
        }
        this.frame_1 = function() {
            playSound("bell2");
            playSound("alarm2");
        }
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));
    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = null;
    (lib.repeatbar = function(mode, startPosition, loop) {
        if (loop == null) {
            loop = false;
        }
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#303030").ss(3, 1, 1).p("AbYjvMg2oAAAQi0AAAAC0IAACBQAFCqCvAAMA2oAAAQCogEAFimIAAiBQAAiwitgEg");
        this.shape.setTransform(195.8, 31);
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("rgba(255,255,255,0.157)").s().p("A97AZQAAizC0AAMA2oAAAQB1ADAmBTMg10AAAQlUACgvDdg");
        this.shape_1.setTransform(194.9, 22.5);
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("rgba(0,0,0,0.067)").s().p("A7ZBzQh5AAgohQMA2NAAAQEWgCBSiTIAAA8QgFClioAEg");
        this.shape_2.setTransform(196.8, 43.5);
        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_2
            }, {
                t: this.shape_1
            }]
        }).wait(1));
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("A7QDwQiuAAgGiqIAAiBQABi0CzAAMA2oAAAQCtAEAACwIAACBQgGCminAEg");
        mask.setTransform(195.8, 31);
        this.white_mc = new lib.Symbol1();
        this.white_mc.name = "white_mc";
        this.white_mc.parent = this;
        this.white_mc.setTransform(3.4, 31, 0.001, 1);
        var maskedShapeInstanceList = [this.white_mc];
        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }
        this.timeline.addTween(cjs.Tween.get(this.white_mc).wait(1));
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.lf(["#FF0000", "#DD0000"], [0, 0.922], -192.4, 0, 192.5, 0).s().p("A7QDwQiuAAgGiqIAAiBQABi0CzAAMA2oAAAQCtAEAACwIAACBQgGCminAEg");
        this.shape_3.setTransform(195.8, 31);
        var maskedShapeInstanceList = [this.shape_3];
        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }
        this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));
    }
    ).prototype = getMCSymbolPrototype(lib.repeatbar, new cjs.Rectangle(1.9,5.5,387.9,51), null);
    (lib.scr_set = function(mode, startPosition, loop) {
        if (loop == null) {
            loop = false;
        }
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.an_Label({
            'id': '',
            'label': 'Times',
            'disabled': false,
            'visible': true,
            'class': 'ui-label'
        });
        this.instance.setTransform(191, 252, 1, 1, 0, 0, 0, 50, 11);
        this.pauseTimers = new lib.an_Checkbox({
            'id': 'pauseTimers',
            'label': 'Pause timer between each loop.',
            'value': '',
            'disabled': false,
            'visible': true,
            'class': 'ui-checkbox'
        });
        this.pauseTimers.setTransform(12.4, 223.7, 3.755, 1, 0, 0, 0, 0.1, 11);
        this.howMany = new lib.an_NumericStepper({
            'id': 'howMany',
            'value': '1',
            'min': '1',
            'max': '10',
            'disabled': false,
            'visible': true,
            'class': 'ui-numericstepper'
        });
        this.howMany.setTransform(98.6, 251.1, 0.317, 1, 0, 0, 0, 0.1, 11);
        this.loopForever = new lib.an_RadioButton({
            'id': 'loopForever',
            'label': 'Loop Forever',
            'value': '',
            'name': 'radio',
            'disabled': false,
            'visible': true,
            'class': 'ui-radiobutton'
        });
        this.loopForever.setTransform(250.1, 252, 1.438, 1, 0, 0, 0, 0.1, 11);
        this.loopNum = new lib.an_RadioButton({
            'id': 'loopNum',
            'label': 'Loop:',
            'value': '',
            'name': 'radio',
            'disabled': false,
            'visible': true,
            'class': 'ui-radiobutton'
        });
        this.loopNum.setTransform(12, 252, 0.809, 1, 0, 0, 0, 0.1, 11);
        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.loopNum
            }, {
                t: this.loopForever
            }, {
                t: this.howMany
            }, {
                t: this.pauseTimers
            }, {
                t: this.instance
            }]
        }).wait(1));
        this.txt_timer = new cjs.Text("00:00:00","74px 'Arial'");
        this.txt_timer.name = "txt_timer";
        this.txt_timer.textAlign = "center";
        this.txt_timer.lineHeight = 83;
        this.txt_timer.lineWidth = 378;
        this.txt_timer.parent = this;
        this.txt_timer.setTransform(200.1, 25);
        this.timeline.addTween(cjs.Tween.get(this.txt_timer).wait(1));
        this.txt_set = new cjs.Text("Set","22px 'Arial'");
        this.txt_set.name = "txt_set";
        this.txt_set.textAlign = "center";
        this.txt_set.lineHeight = 25;
        this.txt_set.lineWidth = 87;
        this.txt_set.parent = this;
        this.txt_set.setTransform(345.4, 125.3);
        this.txt_clear = new cjs.Text("Clear","22px 'Arial'");
        this.txt_clear.name = "txt_clear";
        this.txt_clear.textAlign = "center";
        this.txt_clear.lineHeight = 25;
        this.txt_clear.lineWidth = 87;
        this.txt_clear.parent = this;
        this.txt_clear.setTransform(345.4, 164.3);
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("AgiBGQgLgKgDgTIATgBQACANAHAGQAHAGAKAAQAIAAAHgFQAGgEAFgGQAEgHADgMQADgLAAgNIAAgDQgGAJgKAGQgKAFgLAAQgUAAgNgOQgOgNAAgXQAAgYAPgPQAOgOAVAAQAOAAANAIQANAIAGAQQAHAPAAAdQAAAdgHASQgGASgNAJQgNAJgQAAQgTAAgMgKgAgVg1QgKALAAAQQAAAPAJAKQAJAIANAAQANAAAJgIQAIgKAAgQQAAgRgIgKQgJgJgNAAQgMAAgJAKg");
        this.shape.setTransform(264.3, 137.4);
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#000000").s().p("AglBDQgOgOAAgVQAAgPAIgKQAIgKAOgEQgMgEgGgIQgFgIAAgMQAAgRAMgMQAMgLAUAAQAUAAANAMQAMAMAAARQAAALgFAIQgGAIgMAEQAPAFAHAKQAIAKAAAPQAAAUgOAOQgPANgXAAQgWAAgPgNgAgWAKQgJAJAAANQAAAJAEAHQAEAIAIAEQAHAFAIAAQAOAAAJgJQAJgJAAgOQAAgOgJgJQgJgJgOAAQgNAAgJAJgAgRg4QgIAHAAAKQAAALAHAHQAIAHAKAAQALAAAIgHQAHgHAAgKQAAgLgIgHQgHgHgLAAQgKAAgHAHg");
        this.shape_1.setTransform(206.3, 137.4);
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#000000").s().p("AgcBOQABgTAGgaQAHgaANgYQANgYAOgRIhMAAIAAgTIBlAAIAAAPQgPAQgPAbQgPAZgHAcQgGAUgBAYg");
        this.shape_2.setTransform(148.4, 137.4);
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#000000").s().p("AgkA/QgPgSAAgpQAAgtARgUQAOgSAYAAQATAAAMAKQAMAKACATIgUABQgCgLgFgFQgHgIgMAAQgIAAgHAFQgKAGgEANQgGANAAAYQAHgLAKgFQAKgFAKAAQATAAAOAOQAOANAAAXQAAAOgGANQgHANgLAHQgLAGgPAAQgXAAgPgRgAgUACQgJAJAAAQQAAAKAFAJQADAJAIAFQAHAFAIAAQAMAAAJgKQAJgKAAgRQAAgRgJgJQgIgIgOAAQgLAAgKAIg");
        this.shape_3.setTransform(90.3, 137.4);
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#000000").s().p("AgkBDQgNgMgCgUIAUgCQACAPAJAIQAIAIALgBQANAAAKgKQAKgLAAgRQAAgRgJgJQgKgJgOAAQgJAAgIAFQgHADgFAHIgSgDIAQhQIBNAAIAAATIg+AAIgIAqQAOgKAOAAQAVAAAOAPQAOANAAAWQAAAWgMAPQgPATgaAAQgVAAgOgMg");
        this.shape_4.setTransform(32.4, 137.5);
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#000000").s().p("AAOBPIAAgmIhDAAIAAgSIBGhlIAQAAIAABlIAVAAIAAASIgVAAIAAAmgAgiAXIAwAAIAAhGg");
        this.shape_5.setTransform(264, 176.3);
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#000000").s().p("AgjBEQgOgNgCgTIAUgDQADARAIAHQAIAIAMAAQAMAAAKgKQAJgKAAgNQAAgOgJgIQgIgJgOAAQgEAAgIACIACgQIADAAQALAAAKgHQAKgFAAgOQAAgLgHgHQgHgGgLgBQgLABgIAGQgHAIgCANIgUgDQAEgTANgLQAMgLATABQAMgBALAGQAKAGAGAJQAGAJAAALQAAALgGAIQgFAIgLAFQAOADAIAJQAIALAAAPQAAAVgPAOQgPAOgWAAQgVAAgOgMg");
        this.shape_6.setTransform(206.3, 176.4);
        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#000000").s().p("AgzBPQAAgHACgHQAEgKAJgKQAJgKAQgOQAZgVAJgMQAJgMAAgLQAAgMgIgHQgJgIgNAAQgNAAgIAJQgIAHgBAPIgTgCQACgWANgMQANgLAWAAQAWAAAOAMQANANAAATQAAAJgEAJQgEAJgJAJQgJAKgVASQgQAOgFAGQgFAFgDAGIBMAAIAAASg");
        this.shape_7.setTransform(148.1, 176.3);
        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#000000").s().p("AAKBPIAAh6QgIAGgJAHQgMAHgJADIAAgTQAQgHAMgLQALgLAFgKIANAAIAACdg");
        this.shape_8.setTransform(89.6, 176.3);
        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#000000").s().p("AgjBAQgPgUAAgsQAAgbAFgRQAGgRALgJQAMgJAQAAQANAAAJAFQAKAFAGAJQAGAKAEAOQADAOAAAWQABAcgHARQgFARgLAJQgMAJgRAAQgWAAgNgQgAgVg0QgKAOABAmQgBAnAKANQAJANAMAAQANAAAKgNQAJgNAAgnQAAgmgJgNQgKgMgNAAQgMAAgJALg");
        this.shape_9.setTransform(32.3, 176.4);
        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_9
            }, {
                t: this.shape_8
            }, {
                t: this.shape_7
            }, {
                t: this.shape_6
            }, {
                t: this.shape_5
            }, {
                t: this.shape_4
            }, {
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }, {
                t: this.txt_clear
            }, {
                t: this.txt_set
            }]
        }).wait(1));
        this.grc_set = new lib.grc_set();
        this.grc_set.name = "grc_set";
        this.grc_set.parent = this;
        this.grc_set.setTransform(298.1, 121);
        new cjs.ButtonHelper(this.grc_set,0,1,1);
        this.grc_clear = new lib.grc_clear();
        this.grc_clear.name = "grc_clear";
        this.grc_clear.parent = this;
        this.grc_clear.setTransform(322, 176.3, 1, 1, 0, 0, 0, 23.9, 15.3);
        new cjs.ButtonHelper(this.grc_clear,0,1,1);
        this.grc_b4 = new lib.grc_num();
        this.grc_b4.name = "grc_b4";
        this.grc_b4.parent = this;
        this.grc_b4.setTransform(264.1, 176.3, 1, 1, 0, 0, 0, 23.9, 15.3);
        new cjs.ButtonHelper(this.grc_b4,0,1,1);
        this.grc_b3 = new lib.grc_num();
        this.grc_b3.name = "grc_b3";
        this.grc_b3.parent = this;
        this.grc_b3.setTransform(206.3, 176.3, 1, 1, 0, 0, 0, 23.9, 15.3);
        new cjs.ButtonHelper(this.grc_b3,0,1,1);
        this.grc_b2 = new lib.grc_num();
        this.grc_b2.name = "grc_b2";
        this.grc_b2.parent = this;
        this.grc_b2.setTransform(148.4, 176.3, 1, 1, 0, 0, 0, 23.9, 15.3);
        new cjs.ButtonHelper(this.grc_b2,0,1,1);
        this.grc_b1 = new lib.grc_num();
        this.grc_b1.name = "grc_b1";
        this.grc_b1.parent = this;
        this.grc_b1.setTransform(90.6, 176.3, 1, 1, 0, 0, 0, 23.9, 15.3);
        new cjs.ButtonHelper(this.grc_b1,0,1,1);
        this.grc_b0 = new lib.grc_num();
        this.grc_b0.name = "grc_b0";
        this.grc_b0.parent = this;
        this.grc_b0.setTransform(32.7, 176.3, 1, 1, 0, 0, 0, 23.9, 15.3);
        new cjs.ButtonHelper(this.grc_b0,0,1,1);
        this.grc_b9 = new lib.grc_num();
        this.grc_b9.name = "grc_b9";
        this.grc_b9.parent = this;
        this.grc_b9.setTransform(264.1, 136.3, 1, 1, 0, 0, 0, 23.9, 15.3);
        new cjs.ButtonHelper(this.grc_b9,0,1,1);
        this.grc_b8 = new lib.grc_num();
        this.grc_b8.name = "grc_b8";
        this.grc_b8.parent = this;
        this.grc_b8.setTransform(206.3, 136.3, 1, 1, 0, 0, 0, 23.9, 15.3);
        new cjs.ButtonHelper(this.grc_b8,0,1,1);
        this.grc_b7 = new lib.grc_num();
        this.grc_b7.name = "grc_b7";
        this.grc_b7.parent = this;
        this.grc_b7.setTransform(148.4, 136.3, 1, 1, 0, 0, 0, 23.9, 15.3);
        new cjs.ButtonHelper(this.grc_b7,0,1,1);
        this.grc_b6 = new lib.grc_num();
        this.grc_b6.name = "grc_b6";
        this.grc_b6.parent = this;
        this.grc_b6.setTransform(90.6, 136.3, 1, 1, 0, 0, 0, 23.9, 15.3);
        new cjs.ButtonHelper(this.grc_b6,0,1,1);
        this.grc_b5 = new lib.grc_num();
        this.grc_b5.name = "grc_b5";
        this.grc_b5.parent = this;
        this.grc_b5.setTransform(32.7, 136.3, 1, 1, 0, 0, 0, 23.9, 15.3);
        new cjs.ButtonHelper(this.grc_b5,0,1,1);
        this.animatedObject = new lib.grc_screen();
        this.animatedObject.name = "animatedObject";
        this.animatedObject.parent = this;
        this.animatedObject.setTransform(199.7, 69.5, 1, 1, 0, 0, 0, 192.5, 39.5);
        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#E6E9FF").s().p("A/PCbIAAgeMA+fAAAIAAAegA/Ph8IAAgeMA+fAAAIAAAeg");
        this.shape_10.setTransform(200, 220.6);
        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_10
            }, {
                t: this.animatedObject
            }, {
                t: this.grc_b5
            }, {
                t: this.grc_b6
            }, {
                t: this.grc_b7
            }, {
                t: this.grc_b8
            }, {
                t: this.grc_b9
            }, {
                t: this.grc_b0
            }, {
                t: this.grc_b1
            }, {
                t: this.grc_b2
            }, {
                t: this.grc_b3
            }, {
                t: this.grc_b4
            }, {
                t: this.grc_clear
            }, {
                t: this.grc_set
            }]
        }).wait(1));
        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#FFFFFF").s().p("A/PTJMAAAgmRMA+fAAAMAAAAmRg");
        this.shape_11.setTransform(200, 142.5);
        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#003399").s().p("A/PBkIAAjHMA+fAAAIAADHg");
        this.shape_12.setTransform(200, 275);
        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_12
            }, {
                t: this.shape_11
            }]
        }).wait(1));
    }
    ).prototype = getMCSymbolPrototype(lib.scr_set, new cjs.Rectangle(0,20,400,265), null);
    (lib.scr_timer = function(mode, startPosition, loop) {
        if (loop == null) {
            loop = false;
        }
        this.initialize(mode, startPosition, loop, {});
        this.txt_mils = new cjs.Text("000","13px 'Arial'");
        this.txt_mils.name = "txt_mils";
        this.txt_mils.textAlign = "center";
        this.txt_mils.lineHeight = 15;
        this.txt_mils.lineWidth = 29;
        this.txt_mils.parent = this;
        this.txt_mils.setTransform(332.7, 93.5);
        this.txt_timer = new cjs.Text("00:00:00","74px 'Arial'");
        this.txt_timer.name = "txt_timer";
        this.txt_timer.textAlign = "center";
        this.txt_timer.lineHeight = 83;
        this.txt_timer.lineWidth = 378;
        this.txt_timer.parent = this;
        this.txt_timer.setTransform(200.1, 25);
        this.txt_clear = new cjs.Text("Clear","22px 'Arial'");
        this.txt_clear.name = "txt_clear";
        this.txt_clear.textAlign = "center";
        this.txt_clear.lineHeight = 25;
        this.txt_clear.lineWidth = 138;
        this.txt_clear.parent = this;
        this.txt_clear.setTransform(308.6, 216);
        this.txt_start = new cjs.Text("Start","22px 'Arial'");
        this.txt_start.name = "txt_start";
        this.txt_start.textAlign = "center";
        this.txt_start.lineHeight = 25;
        this.txt_start.lineWidth = 138;
        this.txt_start.parent = this;
        this.txt_start.setTransform(94.2, 216);
        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.txt_start
            }, {
                t: this.txt_clear
            }, {
                t: this.txt_timer
            }, {
                t: this.txt_mils
            }]
        }).wait(1));
        this.btn_back = new lib.grc_back();
        this.btn_back.name = "btn_back";
        this.btn_back.parent = this;
        this.btn_back.setTransform(-1.6, 259.9, 1.144, 1.144, 0, 0, 0, -0.1, 0.1);
        new cjs.ButtonHelper(this.btn_back,0,1,2,false,new lib.grc_back(),3);
        this.timeline.addTween(cjs.Tween.get(this.btn_back).wait(1));
        this.showLoops_txt = new cjs.Text("3/20","28px 'Arial'");
        this.showLoops_txt.name = "showLoops_txt";
        this.showLoops_txt.textAlign = "center";
        this.showLoops_txt.lineHeight = 32;
        this.showLoops_txt.lineWidth = 378;
        this.showLoops_txt.parent = this;
        this.showLoops_txt.setTransform(199.6, 121.9);
        this.timeline.addTween(cjs.Tween.get(this.showLoops_txt).wait(1));
        this.loops = new cjs.Text("Loops","10px 'Arial'");
        this.loops.name = "loops";
        this.loops.textAlign = "center";
        this.loops.lineHeight = 12;
        this.loops.lineWidth = 377;
        this.loops.parent = this;
        this.loops.setTransform(196.5, 154.9);
        this.timeline.addTween(cjs.Tween.get(this.loops).wait(1));
        this.totalRun_txt = new cjs.Text("Total running time: 00:00:00:000","11px 'Arial'","#333333");
        this.totalRun_txt.name = "totalRun_txt";
        this.totalRun_txt.textAlign = "center";
        this.totalRun_txt.lineHeight = 14;
        this.totalRun_txt.lineWidth = 395;
        this.totalRun_txt.parent = this;
        this.totalRun_txt.setTransform(199.5, 174.1);
        this.animatedObject_mc = new lib.repeatbar();
        this.animatedObject_mc.name = "animatedObject_mc";
        this.animatedObject_mc.parent = this;
        this.animatedObject_mc.setTransform(45.8, 142.5, 1, 1, 0, 0, 0, 41.8, 31);
        this.grc_clear = new lib.grc_stop();
        this.grc_clear.name = "grc_clear";
        this.grc_clear.parent = this;
        this.grc_clear.setTransform(308, 228.5, 1, 1, 0, 0, 0, 71.8, 28.1);
        this.grc_start = new lib.grc_start();
        this.grc_start.name = "grc_start";
        this.grc_start.parent = this;
        this.grc_start.setTransform(93, 228.5, 1, 1, 0, 0, 0, 71.8, 28.1);
        this.flashScreen = new lib.grc_screen();
        this.flashScreen.name = "flashScreen";
        this.flashScreen.parent = this;
        this.flashScreen.setTransform(199.7, 69.5, 1, 1, 0, 0, 0, 192.5, 39.5);
        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.flashScreen
            }, {
                t: this.grc_start
            }, {
                t: this.grc_clear
            }, {
                t: this.animatedObject_mc
            }, {
                t: this.totalRun_txt
            }]
        }).wait(1));
    }
    ).prototype = getMCSymbolPrototype(lib.scr_timer, new cjs.Rectangle(0,23,399,261.9), null);
    (lib.index = function(mode, startPosition, loop) {
        if (loop == null) {
            loop = false;
        }
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.audio();
        this.instance.parent = this;
        this.instance.setTransform(-170.9, -30.9);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
        this.onlinestopwatch = new lib.onlinestopwatchcom();
        this.onlinestopwatch.name = "onlinestopwatch";
        this.onlinestopwatch.parent = this;
        this.onlinestopwatch.setTransform(80, 8.6, 1, 1, 0, 0, 0, 80, 8.6);
        new cjs.ButtonHelper(this.onlinestopwatch,0,1,2,false,new lib.onlinestopwatchcom(),3);
        this.timeline.addTween(cjs.Tween.get(this.onlinestopwatch).wait(1));
        this.instance_1 = new lib.Bitmap1();
        this.instance_1.parent = this;
        this.instance_1.setTransform(347, -26);
        this.scr_set = new lib.scr_set();
        this.scr_set.name = "scr_set";
        this.scr_set.parent = this;
        this.scr_set.setTransform(-441.9, 0);
        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.scr_set
            }, {
                t: this.instance_1
            }]
        }).wait(1));
        this.scr_timer = new lib.scr_timer();
        this.scr_timer.name = "scr_timer";
        this.scr_timer.parent = this;
        this.scr_timer.setTransform(192.5, 75.3, 1, 1, 0, 0, 0, 192.5, 75.3);
        this.timeline.addTween(cjs.Tween.get(this.scr_timer).wait(1));
        this.instance_2 = new lib.grc_blue_bars("synched",0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(200, 110, 1, 1, 0, 0, 0, 200, 110);
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));
    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-241.9,116.5,842,311);
    lib.properties = {
        id: '6109E36FCEBCFE48AA299AE54B799FE3',
        width: 400,
        height: 285,
        fps: 24,
        color: "#FFFFFF",
        opacity: 1.00,
        manifest: [{
            src: "images/Bitmap1.png",
            id: "Bitmap1"
        }, {
            src: "../../sounds/alarm2.mp3",
            id: "alarm2"
        }, {
            src: "../../sounds/bell2.mp3",
            id: "bell2"
        }, {
            src: "https://code.jquery.com/jquery-2.2.4.min.js",
            id: "lib/jquery-2.2.4.min.js"
        }, {
            src: "components/sdk/anwidget.js",
            id: "sdk/anwidget.js"
        }, {
            src: "components/ui/src/radiobutton.js",
            id: "an.RadioButton"
        }, {
            src: "components/ui/src/numericstepper.js",
            id: "an.NumericStepper"
        }, {
            src: "components/ui/src/label.js",
            id: "an.Label"
        }, {
            src: "components/ui/src/checkbox.js",
            id: "an.Checkbox"
        }],
        preloads: []
    };
    (lib.Stage = function(canvas) {
        createjs.Stage.call(this, canvas);
    }
    ).prototype = p = new createjs.Stage();
    p.setAutoPlay = function(autoPlay) {
        this.tickEnabled = autoPlay;
    }
    p.play = function() {
        this.tickEnabled = true;
        this.getChildAt(0).gotoAndPlay(this.getTimelinePosition())
    }
    p.stop = function(ms) {
        if (ms)
            this.seek(ms);
        this.tickEnabled = false;
    }
    p.seek = function(ms) {
        this.tickEnabled = true;
        this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000);
    }
    p.getDuration = function() {
        return this.getChildAt(0).totalFrames / lib.properties.fps * 1000;
    }
    p.getTimelinePosition = function() {
        return this.getChildAt(0).currentFrame / lib.properties.fps * 1000;
    }
    an.bootcompsLoaded = an.bootcompsLoaded || [];
    if (!an.bootstrapListeners) {
        an.bootstrapListeners = [];
    }
    an.bootstrapCallback = function(fnCallback) {
        an.bootstrapListeners.push(fnCallback);
        if (an.bootcompsLoaded.length > 0) {
            for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
                fnCallback(an.bootcompsLoaded[i]);
            }
        }
    }
    ;
    an.compositions = an.compositions || {};
    an.compositions['6109E36FCEBCFE48AA299AE54B799FE3'] = {
        getStage: function() {
            return exportRoot.getStage();
        },
        getLibrary: function() {
            return lib;
        },
        getSpriteSheet: function() {
            return ss;
        },
        getImages: function() {
            return img;
        }
    };
    an.compositionLoaded = function(id) {
        an.bootcompsLoaded.push(id);
        for (var j = 0; j < an.bootstrapListeners.length; j++) {
            an.bootstrapListeners[j](id);
        }
    }
    an.getComposition = function(id) {
        return an.compositions[id];
    }
    function _updateVisibility(evt) {
        if ((this.getStage() == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element) {
            this._element.detach();
            stage.removeEventListener('drawstart', this._updateVisibilityCbk);
            this._updateVisibilityCbk = false;
        }
    }
    function _handleDrawEnd(evt) {
        var props = this.getConcatenatedDisplayProps(this._props)
          , mat = props.matrix;
        var tx1 = mat.decompose();
        var sx = tx1.scaleX;
        var sy = tx1.scaleY;
        var dp = window.devicePixelRatio || 1;
        var w = this.nominalBounds.width * sx;
        var h = this.nominalBounds.height * sy;
        mat.tx /= dp;
        mat.ty /= dp;
        mat.a /= (dp * sx);
        mat.b /= (dp * sx);
        mat.c /= (dp * sy);
        mat.d /= (dp * sy);
        this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
        var x = (mat.tx + this.regX * mat.a + this.regY * mat.c - this.regX);
        var y = (mat.ty + this.regX * mat.b + this.regY * mat.d - this.regY);
        var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
        this._element.setProperty('transform', tx);
        this._element.setProperty('width', w);
        this._element.setProperty('height', h);
        this._element.update();
    }
    function _tick(evt) {
        var stage = this.getStage();
        stage && stage.on('drawend', this._handleDrawEnd, this, true);
        if (!this._updateVisibilityCbk) {
            this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
        }
    }
}
)(createjs = createjs || {}, AdobeAn = AdobeAn || {});
var createjs, AdobeAn;
